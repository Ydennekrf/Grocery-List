const router = require('express').Router();
const { Grocery, Recipes, Users, Ingredients, RecipeIngredient } = require('../../models');
const  Units  =require('../../models/units');
const withAuth = require('../../utils/auth');
// get all recipe data
router.get('/', (req,res) => {
    Recipes.findAll({ 
        include: [{
            model: RecipeIngredient,
        },
        {
            model: Ingredients,
        include:[{
            model: Units
        }]
    }]
    })
    .then(dbpost => 
        
        res.json(dbpost))
    .then(localStorage.setItem("recipeData", JSON.stringify(dbpost)))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;