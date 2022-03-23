import type { AWS } from "@serverless/typescript";

export const cognitoResources: AWS["resources"]["Resources"] = {
  CognitoUserPoolUserPool: {
    Type: "AWS::Cognito::UserPool",
    Properties: {
      UserPoolName: "${self:provider.stage}-bss-user-pool",
      UsernameAttributes: ["email"],
      AutoVerifiedAttributes: ["email"],
    },
  },
  CognitoUserPoolClient: {
    Type: "AWS::Cognito::UserPoolClient",
    Properties: {
      ClientName: "${self:provider.stage}-bss-cognito-client",
      UserPoolId: { Ref: "CognitoUserPoolUserPool" },
      GenerateSecret: false,
    },
  },
  CognitoIdentityPool: {
    Type: "AWS::Cognito::IdentityPool",
    Properties: {
      IdentityPoolName: "${self:provider.stage}-bss-identity-pool",
      AllowUnauthenticatedIdentities: false,
      CognitoIdentityProviders: [
        {
          ClientId: { Ref: "CognitoUserPoolClient" },
          ProviderName: {
            "Fn::GetAtt": ["CognitoUserPoolUserPool", "ProviderName"],
          },
        },
      ],
    },
  },
  CognitoIdentityPoolRoles: {
    Type: "AWS::Cognito::IdentityPoolRoleAttachment",
    Properties: {
      IdentityPoolId: { Ref: "CognitoIdentityPool" },
      Roles: {
        authenticated: {
          "Fn::GetAtt": ["CognitoAuthRole", "Arn"],
        },
      },
    },
  },
  CognitoAuthRole: {
    Type: "AWS::IAM::Role",
    Properties: {
      RoleName: "${self:provider.stage}-bss-auth-role",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Federated: "cognito-identity.amazonaws.com",
            },
            Action: ["sts:AssumeRoleWithWebIdentity"],
            Condition: {
              StringEquals: {
                "cognito-identity.amazonaws.com:aud": {
                  Ref: "CognitoIdentityPool",
                },
              },
              "ForAnyValue:StringLike": {
                "cognito-identity.amazonaws.com:amr": "authenticated",
              },
            },
          },
        ],
      },
      Policies: [
        {
          PolicyName: "CognitoAuthPolicy",
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Action: [
                  "mobileanalytics:PutEvents",
                  "cognito-sync:*",
                  "cognito-identity:*",
                ],
                Resource: "*",
              },
            ],
          },
        },
      ],
    },
  },
};
