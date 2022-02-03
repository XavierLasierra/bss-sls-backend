import {
  formatJSONResponse,
  ValidatedEventAPIGatewayProxyEventProfile,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { errorHandling } from "src/middlewares/errorHandling";
import { authMiddleware } from "src/middlewares/example";

import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEventProfile<typeof schema> = async (
  event
) => {
  return formatJSONResponse({
    message: `Hello ${event.profileName}, welcome to the exciting Serverless world!`,
    event,
  });
};

export const main = middyfy(hello)
  .before(authMiddleware)
  .onError(errorHandling);
