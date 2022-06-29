const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Units extends Model {}
Units.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Units