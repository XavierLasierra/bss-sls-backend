import { Sequelize } from "sequelize";

import * as entities from "../models/swockEntities";

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  quoteIdentifiers: false,
  schema: process.env.DB_SCHEMA,
});

const JobCategoryEntity = entities.jobCategory(sequelize, Sequelize);

const Models = {
  JobCategoryEntity,
};
const connection = {
  isConnected: false,
};

export const sequelizeConnect = async () => {
  if (connection.isConnected) {
    console.log("=> Using existing connection.");
    return sequelize;
  }

  await sequelize.authenticate();
  connection.isConnected = true;
  console.log("=> Created a new connection.");
  return sequelize;
};

export const models = async () => {
  if (!connection.isConnected) {
    await sequelize.authenticate();
    connection.isConnected = true;
    sequelize
      .getQueryInterface()
      .showAllSchemas()
      .then((tableObj) => {
        console.log("// Tables in database", "==========================");
        console.log(tableObj);
      })
      .catch((err) => {
        console.log("showAllSchemas ERROR", err);
      });

    console.log("=> Created a new connection.");
  }
  return Models;
};
