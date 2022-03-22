import type { AWS } from "@serverless/typescript";

import { functions } from "./src/functions";

const serverlessConfiguration: AWS = {
  service: "serverless-boilerplate",
  frameworkVersion: "3",
  useDotenv: true,

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
};

module.exports = serverlessConfiguration;
