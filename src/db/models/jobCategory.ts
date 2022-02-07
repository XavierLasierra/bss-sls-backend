import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize/dist";
import { SWJobCategory } from "src/models/jobCategory";

export type IJobCategoryModel = ModelStatic<IJobCategoryEntity>;
export type IJobCategoryEntity = Model<SWJobCategory>;

export const jobCategory = (
  sequelize: Sequelize,
  types: typeof DataTypes
): IJobCategoryModel => {
  return sequelize.define(
    "sw_job_category",
    {
      id: {
        type: types.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      imageUrl: {
        type: types.STRING,
      },
      name: {
        type: types.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      underscored: true,
    }
  );
};
