var checks = document.getElementsByClassName('checks');
var selected = document.getElementById('recipe-select');


const dish1 = [
    ["onion:", 0.25, "piece(s)"],
    ["garlic:", 1, "piece(s)"],
    ["mushroom:", 6, "piece(s)"],
    ["aborrio rice:", 250, "g"],
    ["white wine:", 50, "ml"],
    ["chicken stock:", 500, "ml"],
    ["parmesan cheese:", 75, "g"],
    ["butter:", 50, "g"],
    ["salt:", 5, "g"],
    ["pepper:", 5, "g"],
    ["thyme:", 0.25, "bunch(es)"],
];


const dish2 = [
    ["onion:", 1, "piece(s)"],
    ["garlic:", 3, "piece(s)"],
    ["butter:", 100, "g"],
    ["salt:", 5, "g"],
    ["pepper:", 5, "g"],
    ["thyme:", 0.5, "bunch(es)"],
    ["10 oz ribeye", 1, "piece(s)"],
    ["yukon gold potato:", 250, "g"],
    ["asparagus:", 0.25, "bunch(es)"],
    ["red wine:", 500, "ml"],
    ["flour:", 50, "g"],
    ["beef stock:", 1, "L"],
];

const dish3 = [
    ["salt:", 10, "g"],
    ["pepper:", 10, "g"],
    ["pasta sheets:", 10, "piece(s)"],
    ["ricotta cheese:", 500, "g"],
    ["spinach:", 2, "bunch(es)"],
    ["provolone cheese:", 500, "g"],
    ["course ground white veal:", 1.2, "kg"],
    ["tomato sauce:", 2.25, "L"],
    ["buffalo mozzarella:", 500, "g"],
    ["basil:", 1, "bunch(es)"],
];


const dish4 = [
    ["white wine:", 0.5, "ml"],
    ["salt:", 15, "g"],
    ["pepper:", 15, "g"],
    ["ricotta cheese:", 1000, "g"],
    ["course ground white veal:", 2, "kg"],
    ["sour dough bread:", 0.5, "piece(s)"],
    ["eggs:", 3, "piece(s)"],
    ["pickled pugliese chili peppers:", 125, "g"],
    ["parsley:", 0.5, "bunch(es)"],
];


const dish5 = [
    ["mushroom:", 10, "piece(s)"],
    ["salt:", 5, "g"],
    ["pepper:", 5, "g"],
    ["yukon gold potato:", 500, "g"],
    ["flour:", 250, "g"],
    ["ricotta cheese:", 500, "g"],
    ["eggs:", 2, "piece(s)"],
    ["arugula:", 50, "g"],
    ["35% cream:", 150, "ml"],
];


const dish6 = [
    ["onion:", 3, "piece(s)"],
    ["yukon gold potato:", 75, "g"],
    ["tomato sauce:", 3, "L"],
    ["arugula:", 35, "g"],
    ["T3 fresh octopus:", 1, "piece(s)"],
    ["lemon:", 2, "piece(s)"],
    ["yellow peppers:", 2, "piece(s)"],
    ["nduja sausage:", 75, "g"],
];

const dish7 = [
    ["salt:", 500, "g"],
    ["pepper:", 5, "g"],
    ["red wine:", 500, "ml"],
    ["ricotta cheese:", 35, "g"],
    ["arugula:", 125, "g"],
    ["heirloom beets:", 250, "g"],
    ["balsamic vinegar:", 10, "ml"],
    ["olive oil", 35, "ml"],
];

selected.addEventListener("click", generateList);

function generateList(){
    var chosenRecipes = [];
    var selectedRecipes = [];
    var eliminateDuplicates = [];

    localStorage.clear();
    selected.disabled = true;

    for (var i=0; i < 7; i++) {
        if ( checks[i].checked === true ) {
            chosenRecipes += checks[i].value + " ";
        }
    };
    let chosenRecipesArray = chosenRecipes.split(' ');
    let removeSpace = chosenRecipesArray.pop();

    if (chosenRecipesArray.includes("1")) {selectedRecipes.push(dish1)};
    if (chosenRecipesArray.includes("2")) {selectedRecipes.push(dish2)};
    if (chosenRecipesArray.includes("3")) {selectedRecipes.push(dish3)};
    if (chosenRecipesArray.includes("4")) {selectedRecipes.push(dish4)};
    if (chosenRecipesArray.includes("5")) {selectedRecipes.push(dish5)}; 
    if (chosenRecipesArray.includes("6")) {selectedRecipes.push(dish6)}; 
    if (chosenRecipesArray.includes("7")) {selectedRecipes.push(dish7)};

    const finalIngredients = selectedRecipes.flat();

    for (var prop of finalIngredients) {
        !eliminateDuplicates.some(value => value && value[0] === prop[0])
        ? eliminateDuplicates.push(prop)
        : eliminateDuplicates.forEach(value => {
            if (value[0] === prop[0]) value [1] += prop[1]
        });
    };

    ingredientList = (eliminateDuplicates.join('\n').replaceAll(',', ' '));

    localStorage.setItem("GroceryList",ingredientList);
};
