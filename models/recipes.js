const { Model , DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipes extends Model {}

Recipes.init({
    id: {
        type: DataTypes.INTGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlphanumeric: true
        }
    },
    instructions: {
        type: DataTypes.STRING,
        allowNull: true
    },
    servings: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }

},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes'
});

module.exports = Recipes