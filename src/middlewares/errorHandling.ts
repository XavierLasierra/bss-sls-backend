import { formatJSONResponse } from "@libs/api-gateway";

export const errorHandling = ({ error }) => {
  const response = error?.message || "Internal server error";
  const statusCode = error?.code || 500;
  return formatJSONResponse(response, statusCode);
};
