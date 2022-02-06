import { models } from "@libs/db";

export const listAsync = async (): Promise<any> => {
  const { JobCategoryEntity } = await models();
  return JobCategoryEntity.findAll();
};
