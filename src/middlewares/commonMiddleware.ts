import middy, { MiddyfiedHandler } from "@middy/core";
import httpEventNormalizer from "@middy/http-event-normalizer";
import middyJsonBodyParser from "@middy/http-json-body-parser";

import {
  CustomAPIGatewayProxyEvent,
  CustomAPIGatewayProxyHandler,
} from "@models/api";
import { httpErrorHandler } from "./httpErrorHandler";

export const commonMiddleware = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handler: CustomAPIGatewayProxyHandler<any>
): MiddyfiedHandler<CustomAPIGatewayProxyEvent> => {
  return middy(handler)
    .use([middyJsonBodyParser(), httpEventNormalizer()])
    .onError(httpErrorHandler);
};
