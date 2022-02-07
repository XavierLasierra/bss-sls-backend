import {
  formatJSONResponse,
  SwockAPIGatewayProxyEvent,
  SwockAPIGatewayProxyResult,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { listAsync } from "./controller";

export async function listHandler(
  event: SwockAPIGatewayProxyEvent
): Promise<SwockAPIGatewayProxyResult> {
  const jobCategories = await listAsync(event.formatedQueryParameters);
  return formatJSONResponse(jobCategories);
}

export const list = middyfy(listHandler);
