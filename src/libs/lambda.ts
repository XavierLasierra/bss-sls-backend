import middy, { MiddyfiedHandler } from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import { errorHandling } from "src/middlewares/errorHandling";
import {
  CustomAPIGatewayProxyEvent,
  CustomAPIGatewayProxyHandler,
  CustomAPIGatewayProxyResult,
} from "./api-gateway";

export const middyfy = (
  handler: CustomAPIGatewayProxyHandler
): MiddyfiedHandler<
  CustomAPIGatewayProxyEvent,
  CustomAPIGatewayProxyResult
> => {
  return middy(handler).use(middyJsonBodyParser()).onError(errorHandling);
};
