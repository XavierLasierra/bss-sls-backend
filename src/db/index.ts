import { Sequelize } from "sequelize";
import pg from "pg";

import { IModels, buildModels } from "./models";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  schema: process.env.DB_SCHEMA,
  dialectModule: pg,
});

const Models: IModels = buildModels(sequelize);

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
