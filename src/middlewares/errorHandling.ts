import { formatJSONResponse } from "@libs/api-gateway";
import middy from "@middy/core";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const errorHandling: middy.MiddlewareFn<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = ({ error }) => {
  const response = error?.message || "Internal server error";
  const statusCode = error?.code || 500;
  return formatJSONResponse(response, statusCode);
};
