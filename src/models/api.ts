import middy from "@middy/core";
import { HttpError } from "@utils/HttpError";
import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
  Handler,
} from "aws-lambda";

export type CustomAPIGatewayProxyEvent<S = null> = Omit<
  APIGatewayProxyEvent,
  "body"
> & {
  body: S;
  cognitoUserId?: string;
};

/**
 * @param S Request Body JSON schema
 */
export type CustomAPIGatewayProxyHandler<S = null> = Handler<
  CustomAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

export type CustomAPIGatewayProxyRequest = middy.Request<
  CustomAPIGatewayProxyEvent,
  APIGatewayProxyResult,
  HttpError,
  Context
>;

export enum ContentType {
  APPLICATION_JSON = "application/json",
}
