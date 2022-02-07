import {
  FormattedQueryParameters,
  SwockAPIGatewayProxyEvent,
  SwockAPIGatewayProxyResult,
} from "@libs/api-gateway";
import middy from "@middy/core";
import { Order } from "sequelize/dist";
import { parseSortParameters } from "src/utils/dbUtilities";

export const getFilterQuery: middy.MiddlewareFn<
  SwockAPIGatewayProxyEvent,
  SwockAPIGatewayProxyResult
> = ({ event }) => {
  const { queryStringParameters } = event;

  const { orderBy, page, size, ...rest } = queryStringParameters || {};

  const order: Order =
    orderBy !== undefined
      ? parseSortParameters(queryStringParameters.orderBy)
      : undefined;

  const limit = size !== undefined ? +size : 25;
  const offset = page !== undefined ? (+page - 1) * limit : undefined;

  const where: any = rest;

  const formatedQueryParameters: FormattedQueryParameters = {
    order,
    limit,
    offset,
    where,
  };

  Object.assign(event, {
    formatedQueryParameters,
  });
};
