import { Sequelize } from "sequelize";
import pg from "pg";

import * as entities from "./models";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  quoteIdentifiers: false,
  schema: process.env.DB_SCHEMA,
  dialectModule: pg,
});

const JobCategoryEntity = entities.jobCategory(sequelize, Sequelize);

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

export const models = async (): Promise<any> => {
  if (!connection.isConnected) {
    await sequelize.authenticate();
    connection.isConnected = true;
  }
  return Models;
};
