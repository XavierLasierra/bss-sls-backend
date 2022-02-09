import middy from "@middy/core";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";
import CustomError from "src/utils/CustomError";

export type CustomAPIGatewayProxyHandler = Handler<
  CustomAPIGatewayProxyEvent,
  CustomAPIGatewayProxyResult
>;

export type CustomAPIGatewayProxyEvent = APIGatewayProxyEvent;

export type CustomAPIGatewayProxyResult = APIGatewayProxyResult;

export type CustomAPIGatewayProxyRequest = middy.Request<
  CustomAPIGatewayProxyEvent,
  CustomAPIGatewayProxyResult,
  CustomError,
  Context
>;

export const formatJSONResponse = <T>(
  response: T,
  statusCode?: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode || 200,
    body: JSON.stringify(response),
    headers: { "Content-Type": "application/json" },
  };
};
