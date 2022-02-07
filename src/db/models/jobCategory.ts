import { Model, ModelStatic, Sequelize } from "sequelize/dist";

export const jobCategory = (
  sequelize: Sequelize,
  DataTypes
): ModelStatic<Model<any, any>> => {
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
