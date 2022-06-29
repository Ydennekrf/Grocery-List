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
        item1: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item2: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item3: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item4: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item5: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item6: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item7: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item8: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item9: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item10: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item11: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        item12: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                len: [2,25]
            }
        },
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'ingredients'
        });

        module.exports = Ingredients
