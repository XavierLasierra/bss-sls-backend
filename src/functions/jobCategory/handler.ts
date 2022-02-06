import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { errorHandling } from "src/middlewares/errorHandling";
import { listAsync } from "./controller";

export async function listHandler(): Promise<Record<string, unknown>> {
  const jobCategories = await listAsync();
  return formatJSONResponse(jobCategories);
}

export const list = middyfy(listHandler).onError(errorHandling);
