import middy from "@middy/core";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { Order } from "sequelize/dist";
import { ContentType } from "src/models/api";
import CustomError from "src/utils/CustomError";

export interface FormattedQueryParameters {
  order?: Order;
  limit: number;
  offset: number;
  where?: {
    [x: string]: any;
  };
}

export type SwockAPIGatewayProxyEvent = APIGatewayProxyEvent & {
  formatedQueryParameters: FormattedQueryParameters;
};

export type SwockAPIGatewayProxyResult = APIGatewayProxyResult;

export type SwockAPIGatewayProxyRequest = middy.Request<
  SwockAPIGatewayProxyEvent,
  SwockAPIGatewayProxyResult,
  CustomError,
  Context
>;

export const formatJSONResponse = (
  response: any,
  statusCode?: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode || 200,
    body: JSON.stringify(response),
    headers: { "Content-Type": ContentType.APPLICATION_JSON },
  };
};
