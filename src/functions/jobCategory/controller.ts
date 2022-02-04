import { models } from "src/services/db";

export const listAsync = async (): Promise<any> => {
  try {
    const { JobCategoryEntity } = await models();
    return JobCategoryEntity.findAll();
  } catch (e) {
    console.log(e);
  }
};
