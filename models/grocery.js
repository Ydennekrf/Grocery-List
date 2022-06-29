const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grocery extends Model {}
    Grocery.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "recipes",
                key: "id"
            }
        },
        recipeIngredient_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "recipeIngredient",
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'grocery'    
    });

    module.exports = Grocery