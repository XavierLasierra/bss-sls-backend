import type { FromSchema } from "json-schema-to-ts";
import { createHelloSchema } from "@schemas/hello/createHelloSchema";

export type CreateHelloBody = FromSchema<
  typeof createHelloSchema.properties.body
>;
