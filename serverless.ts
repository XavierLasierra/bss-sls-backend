import type { AWS } from "@serverless/typescript";

import { functions } from "./src/functions";
import { cognitoResources } from "./src/config/cognitoResources";

const serverlessConfiguration: AWS = {
  service: "bss",
  frameworkVersion: "3",
  useDotenv: true,
  org: "xavxav",
  app: "bss",

  plugins: ["serverless-bundle", "serverless-offline"],

  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    memorySize: 128,
    stage: "${opt:stage, 'dev'}",
    region: "eu-west-1",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {},
  },

  package: {
    individually: true,
    patterns: ["!*", "./src", "./package.json"],
  },

  functions,

  custom: {
    bundle: {
      esbuild: true,
      sourcemaps: false,
      linting: false,
    },
    "serverless-offline": {
      noPrependStageInUrl: true,
      noAuth: true,
    },
  },

  resources: {
    Resources: {
      ...cognitoResources,
    },
  },
  outputs: {
    UserPoolId: { Value: { Ref: "CognitoUserPoolUserPool" } },
    UserPoolClientId: { Value: { Ref: "CognitoUserPoolClient" } },
    IdentityPoolId: { Value: { Ref: "CognitoIdentityPool" } },
    CognitoAuthRole: {
      Value: { Ref: "CognitoAuthRole" },
      Export: { Name: "CognitoAuthRole-${self:provider.stage}" },
    },
  },
};

module.exports = serverlessConfiguration;
