const Users = require('./users');
const Recipes = require('./recipes');
const Ingredients = require('./ingredients');

Users.hasMany(Recipes, {
    foreignKey: 'user_id'
});
Recipes.hasMany(Ingredients, {
    foreignKey: 'recipe_id'
});
Recipes.belongsTo(Users, {
    foreignKey: 'user_id'
});
Ingredients.belongsTo(Recipes, {
    foreignKey: 'recipe_id'
});

module.exports = {Users, Recipes, Ingredients};