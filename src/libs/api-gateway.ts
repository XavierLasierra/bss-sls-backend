import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

// export type ValidatedEventAPIGatewayProxyEventProfile<S> = Handler<
//   ValidatedAPIGatewayProxyEvent<S> & { profileName: string },
//   APIGatewayProxyResult
// >;

export const formatJSONResponse = (
  response: any,
  statusCode?: number
): APIGatewayProxyResult => {
  return {
    statusCode: statusCode || 200,
    body: JSON.stringify(response),
    headers: { "Content-Type": "application/json" },
  };
};
