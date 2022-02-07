import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize/dist";
import { SWJob } from "src/models/job";

export type IJobModel = ModelStatic<IJobEntity>;
export type IJobEntity = Model<SWJob, SWJob>;

export const job = (sequelize: Sequelize): IJobModel => {
  return sequelize.define(
    "sw_job",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      createdTsz: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.GEOMETRY,
      },
      fakeLocation: {
        type: DataTypes.GEOMETRY,
      },
      address: {
        type: DataTypes.STRING,
      },
      budget: {
        type: DataTypes.DOUBLE,
        // DEBT
        get(): number {
          const value = this.getDataValue("budget");
          return +value;
        },
      },
      scheduleExpectedStartDay: {
        type: DataTypes.DATE,
      },
      scheduleExpectedDuration: {
        type: DataTypes.INTEGER,
      },
      jobStatusId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    }
  );
};
