const Users = require('./users');
const Recipes = require('./recipes');
const Ingredients = require('./ingredients');
const Units = require('./units');
const Grocery = require('./grocery');
const RecipeIngredient = require('./recipeIngredient');

Users.hasOne(Grocery, {
    foreignKey: 'user_id'
});
Grocery.belongsTo(Users, {
    foreignKey: 'user_id'
});
Grocery.hasMany(Recipes, {
    foreignKey: 'grocery_id'
});
Grocery.hasMany(RecipeIngredient, {
    foreignKey: 'grocery_id'
});
Recipes.belongsTo(Grocery, {
    foreignKey: 'grocery_id'
});
Recipes.hasMany(RecipeIngredient, {
    foreignKey: 'recipe_id'
});
RecipeIngredient.belongsTo(Recipes, {
    foreignKey: 'recipe_id'
});
RecipeIngredient.belongsTo(Grocery, {
    foreignKey: 'grocery_id'
});
RecipeIngredient.hasMany(Ingredients, {
    foreignKey: 'ingredient_id'
});
Ingredients.belongsTo(RecipeIngredient, {
    foreignKey: 'ingredient_id'
});
Ingredients.hasOne(Units, {
    foreignKey: 'unit_id'
});
Units.belongsTo(Ingredients, {
    foreignKey: 'unit_id'
});


module.exports = {Users, Recipes, Ingredients, Grocery, RecipeIngredient};