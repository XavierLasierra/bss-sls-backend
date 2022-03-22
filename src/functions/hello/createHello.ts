import validator from "@middy/validator";
import { createHelloSchema } from "@schemas/hello/createHelloSchema";
import { CreateHelloBody } from "@models/hello";
import { commonMiddleware } from "@middlewares/commonMiddleware";
import { formatJSONResponse } from "@utils/formatJSONResponse";
import { HttpError } from "@utils/HttpError";
import { CustomAPIGatewayProxyHandler } from "@models/api";

export const createHello: CustomAPIGatewayProxyHandler<
  CreateHelloBody
> = async (event) => {
  // eslint-disable-next-line no-console
  console.log(event);
  const {
    body: { name },
  } = event;
  if (name === "Juan") {
    throw new HttpError(`Name ${name} is unauthorized`, 401);
  }

  return formatJSONResponse<string>("Created", 201);
};

export const handler = commonMiddleware(createHello).use(
  validator({ inputSchema: createHelloSchema })
);
