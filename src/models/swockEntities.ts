export const jobCategory = (sequelize, type) => {
  return sequelize.define(
    "sw_job_category",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      imageUrl: {
        type: type.STRING,
      },
      name: {
        type: type.STRING,
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
