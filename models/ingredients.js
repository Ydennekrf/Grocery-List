const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredients extends Model {}
    Ingredients.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        unitMeasure: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'ingredients'
        });
        
        module.exports = Ingredients
