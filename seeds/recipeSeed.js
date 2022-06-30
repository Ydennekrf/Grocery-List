const { Recipes } = require('../models');

const recipeSeed = [{
    title: "Mushroom Risotto",
    instructions: "1. chop onion, ",
    servings: 2,
    },{
    title: "10oz NY Strip with mashed potato and asparagus",
    instructions: "1. ",
    servings: 2,
},{
    title: "Home style Veal Lasagna",
    instructions: "1. ",
    servings: 10,
},{
    title: "Ricotta Veal Meatballs with grilled bread",
    instructions: "1. ",
    servings: 12,
},{
    title: "Ricotta Gnocchi with Mushrooms and Arugula",
    instructions: "1. ",
    servings: 4,
},{
    title: "Grilled Octopus with N'Duja sausage potatos arugula and a yellow pepper coulis",
    instructions: " 1. ",
    servings: 8,
},{
    title: "Red Wine salt roast Beets with Ricotta cheese and arugula",
    instructions: "1. ",
    servings: 4,
}]

const recipeSeeding = () => Recipes.bulkCreate(recipeSeed);

module.exports = recipeSeeding;