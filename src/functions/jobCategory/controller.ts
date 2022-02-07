import { models } from "src/db";
import { SWJobCategoryDb } from "src/models/jobCategory";

export const listAsync = async (): Promise<SWJobCategoryDb[]> => {
  const { JobCategoryEntity } = await models();
  return JobCategoryEntity.findAll();
};
