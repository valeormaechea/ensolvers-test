module.exports = (sequelize, DataTypes) => {
  return sequelize.define("note", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: { type: DataTypes.STRING, allowNull: false },
    archived: { type: DataTypes.BOOLEAN },
  });
};
