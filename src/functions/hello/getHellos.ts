import { APIGatewayProxyResult } from "aws-lambda";

import { commonMiddleware } from "@middlewares/commonMiddleware";
import { formatJSONResponse } from "@utils/formatJSONResponse";
import { CustomAPIGatewayProxyEvent } from "@models/api";

export const getHellos = async (
  event: CustomAPIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  // eslint-disable-next-line no-console
  console.log(event);

  const response = ["what's up", "hi", "ei"];
  return formatJSONResponse<string[]>(response);
};

export const handler = commonMiddleware(getHellos);
