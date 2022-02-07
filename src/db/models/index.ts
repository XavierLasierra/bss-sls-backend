import { Sequelize } from "sequelize/dist";
import { IJobModel, job } from "./job";
import { IJobCategoryModel, jobCategory } from "./jobCategory";
import { IJobJobCategoryModel, jobJobCategory } from "./jobJobCategory";
import { IUserModel, user } from "./user";

export interface IModels {
  JobCategoryModel: IJobCategoryModel;
  JobModel: IJobModel;
  UserModel: IUserModel;
  JobJobCategoryModel: IJobJobCategoryModel;
}

export const buildModels = (sequelize: Sequelize): IModels => {
  const JobCategoryModel = jobCategory(sequelize);
  const JobModel = job(sequelize);
  const UserModel = user(sequelize);
  const JobJobCategoryModel = jobJobCategory(sequelize);

  JobModel.belongsTo(UserModel, {
    foreignKey: {
      name: "userId",
      field: "user_id",
    },
    as: "posterDetails",
  });

  JobJobCategoryModel.belongsTo(JobCategoryModel, {
    foreignKey: {
      name: "jobCategoryIdKey",
      field: "job_category_id",
    },
    as: "jobCategory",
  });

  JobJobCategoryModel.belongsTo(JobModel, {
    foreignKey: {
      name: "jobIdKey",
      field: "job_id",
    },
    as: "job",
  });

  return {
    JobCategoryModel,
    JobModel,
    UserModel,
    JobJobCategoryModel,
  };
};
