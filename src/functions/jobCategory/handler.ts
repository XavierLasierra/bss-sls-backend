import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayProxyResult } from "aws-lambda";
import { listAsync } from "./controller";

export async function listHandler(): Promise<APIGatewayProxyResult> {
  const jobCategories = await listAsync();
  return formatJSONResponse(jobCategories);
}

export const list = middyfy(listHandler);
