import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize/dist";
import { SWJobCategory } from "src/models/jobCategory";

export type IJobCategoryModel = ModelStatic<IJobCategoryEntity>;
export type IJobCategoryEntity = Model<SWJobCategory>;

export const jobCategory = (sequelize: Sequelize): IJobCategoryModel => {
  return sequelize.define(
    "sw_job_category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
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
