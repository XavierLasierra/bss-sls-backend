import { ContentType } from "@models/api";
import { APIGatewayProxyResult } from "aws-lambda";

export const formatJSONResponse = <T>(
  body?: T,
  statusCode = 200
): APIGatewayProxyResult => {
  return {
    statusCode,
    body: body ? JSON.stringify(body) : null,
    headers: { "Content-Type": ContentType.APPLICATION_JSON },
  };
};
