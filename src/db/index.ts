import { DataTypes, Sequelize } from "sequelize";
import pg from "pg";

import * as entities from "./models";
import { IJobCategoryModel } from "./models/jobCategory";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  quoteIdentifiers: false,
  schema: process.env.DB_SCHEMA,
  dialectModule: pg,
});

const JobCategoryEntity = entities.jobCategory(sequelize, DataTypes);

export interface IModels {
  JobCategoryEntity: IJobCategoryModel;
}

const Models = {
  JobCategoryEntity,
};

const connection = {
  isConnected: false,
};

export const sequelizeConnect = async (): Promise<Sequelize> => {
  if (connection.isConnected) {
    return sequelize;
  }

  await sequelize.authenticate();
  connection.isConnected = true;
  return sequelize;
};

export const models = async (): Promise<IModels> => {
  if (!connection.isConnected) {
    await sequelize.authenticate();
    connection.isConnected = true;
  }
  return Models;
};
