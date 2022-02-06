import { models } from "@libs/db";

export const listAsync = async (): Promise<any> => {
  try {
    const { JobCategoryEntity } = await models();
    return JobCategoryEntity.findAll();
  } catch (e) {
    console.log(e);
  }
};
