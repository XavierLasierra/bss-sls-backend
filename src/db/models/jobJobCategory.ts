import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize/dist";
import { SWJobJobCategory } from "src/models/job";

export type IJobJobCategoryModel = ModelStatic<IJobJobCategoryEntity>;
export type IJobJobCategoryEntity = Model<SWJobJobCategory>;

export const jobJobCategory = (sequelize: Sequelize): IJobJobCategoryModel => {
  return sequelize.define(
    "sw_job_job_category",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: Sequelize.literal(
          "nextval('dbo.sw_job_job_category_id_seq'::regclass)"
        ),
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
