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
Recipes.belongsToMany(Ingredients, {
    through: RecipeIngredient,
    foreignKey: 'recipe_id',
});
Ingredients.belongsToMany(Recipes, {
    through: RecipeIngredient,
    foreignKey: 'ingredient_id'
})

Ingredients.belongsTo(Units, {
    foreignKey: 'unit_id'
});
Units.hasOne(Ingredients, {
    foreignKey: 'unit_id'
});


module.exports = {Users, Recipes, Ingredients, Grocery, RecipeIngredient};