import { APIGatewayProxyResult } from "aws-lambda";
import { CustomAPIGatewayProxyRequest } from "@models/api";
import { formatJSONResponse } from "@utils/formatJSONResponse";

export const httpErrorHandler = ({
  error,
}: CustomAPIGatewayProxyRequest): APIGatewayProxyResult => {
  const status = error?.statusCode || 500;
  const response = {
    message: error?.message || "Internal Server Error",
    status,
  };
  return formatJSONResponse(response, status);
};
