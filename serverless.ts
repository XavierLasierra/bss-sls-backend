import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "serverless-boilerplate",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-dotenv-plugin",
    "serverless-offline",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
      DB_SCHEMA: process.env.DB_SCHEMA,
    },
  },
  functions: {
    jobCategoryGetList: {
      handler: `./src/functions/jobCategory/handler.list`,
      events: [
        {
          http: {
            method: "get",
            path: "category",
          },
        },
      ],
      memorySize: 128,
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
