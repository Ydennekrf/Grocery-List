const { Recipes } = require('../models');

const recipeSeed = [{
    title: "Mushroom Risotto",
    instructions: "1. chop onion, garlic and mushrooms. /nl 2. In a large pan, sautee mushrooms onions and garlic, when done set aside. /nl 3. Using the large pan toast rice lightly deglaze with white wine and begin slowly adding chicken stock. /nl 4. Continue adding chicken stock while mixing rice. /nl 5. When rice is 80% cooked add onions mushrooms and garlic. /n 6. When rice is al Dente remove from heat and add cheese butter salt and pepper and mix well. /n 7. Garnish with chopped thyme",
    servings: 2,
    grocery_id: 1,
    },{
    title: "10oz NY Strip with mashed potato and asparagus",
    instructions: "1. ",
    servings: 2,
    grocery_id: 1,
},{
    title: "Home style Veal Lasagna",
    instructions: "1. ",
    servings: 10,
    grocery_id: 1
},{
    title: "Ricotta Veal Meatballs with grilled bread",
    instructions: "1. ",
    servings: 12,
    grocery_id: 1
},{
    title: "Ricotta Gnocchi with Mushrooms and Arugula",
    instructions: "1. ",
    servings: 4,
    grocery_id: 1
},{
    title: "Grilled Octopus with N'Duja sausage potatos arugula and a yellow pepper coulis",
    instructions: " 1. ",
    servings: 8,
    grocery_id: 1
},{
    title: "Red Wine salt roast Beets with Ricotta cheese and arugula.",
    instructions: "1. ",
    servings: 4,
    grocery_id: 1
}]

const recipeSeeding = () => Recipes.bulkCreate(recipeSeed);

module.exports = recipeSeeding;