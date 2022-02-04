export const jobCategory = (sequelize, type) => {
  const jobCategory = sequelize.define(
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

  return jobCategory;
};
