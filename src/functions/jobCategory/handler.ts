import { middyfy } from "@libs/lambda";
import { errorHandling } from "src/middlewares/errorHandling";
import { listAsync } from "./controller";
import { formatJSONResponse } from "@libs/api-gateway";

export async function listHandler(event): Promise<Record<string, unknown>> {
  const jobCategories = await listAsync();
  return formatJSONResponse(jobCategories);
}

export const list = middyfy(listHandler).onError(errorHandling);
