import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEventProfile,
} from "@libs/api-gateway";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import { exampleMiddleware } from "src/middlewares/example";

import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEventProfile<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: `Hello ${event.profileName}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middy(hello)
  .use(jsonBodyParser())
  .before(exampleMiddleware);
