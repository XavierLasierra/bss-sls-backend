import type { AWS } from "@serverless/typescript";
import { helloFunctions } from "./hello";

export const functions: AWS["functions"] = {
  ...helloFunctions,
};
