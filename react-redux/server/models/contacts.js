module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT(255),
      unique: true,
      allowNull: false
    }
  });

  Contact.associate = function (models) {};

  return Contact;
};
