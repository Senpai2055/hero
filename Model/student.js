module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("student", {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.STRING,
      allowNull:true
    },
  });
  return Student;
};
