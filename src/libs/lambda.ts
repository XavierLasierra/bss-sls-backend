import middy, { MiddyfiedHandler } from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import { errorHandling } from "src/middlewares/errorHandling";
import { getFilterQuery } from "src/middlewares/getFilterQuery";

export const middyfy = (
  handler: APIGatewayProxyHandler
): MiddyfiedHandler<APIGatewayProxyEvent, APIGatewayProxyResult> => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .before(getFilterQuery)
    .onError(errorHandling);
};
