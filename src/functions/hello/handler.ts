import {
  CustomAPIGatewayProxyEvent,
  CustomAPIGatewayProxyResult,
  formatJSONResponse,
} from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { listAsync } from "./controller";

export const list = middyfy(
  async (
    event: CustomAPIGatewayProxyEvent
  ): Promise<CustomAPIGatewayProxyResult> => {
    // eslint-disable-next-line no-console
    console.log(event);

    const response = await listAsync();
    return formatJSONResponse<string>(response);
  }
);
