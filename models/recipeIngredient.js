const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RecipeIngredient extends Model {}
    RecipeIngredient.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_id: {

        },
        ingredient_id: {

        },
        amount: {

        }
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'recipeIngredient'
        });

        module.exports = RecipeIngredient