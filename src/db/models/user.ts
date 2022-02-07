import { DataTypes, Model, ModelStatic, Sequelize } from "sequelize/dist";
import { SWUser } from "src/models/user";

export type IUserModel = ModelStatic<IUserEntity>;
export type IUserEntity = Model<SWUser>;

export const user = (sequelize: Sequelize): IUserModel => {
  return sequelize.define(
    "sw_user",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      deviceId: {
        type: DataTypes.STRING,
      },
      createdTsz: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lastLoginTsz: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      lastModifiedTsz: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImageUrl: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      stripeCustomerId: {
        type: DataTypes.STRING,
      },
      isPremium: {
        type: DataTypes.BOOLEAN,
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
