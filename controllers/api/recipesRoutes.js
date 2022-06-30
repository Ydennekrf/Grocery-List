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
    .then(dbpost => res.json(dbpost))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/ingredients', (req,res) => {
    Ingredients.findAll({    
    })
    .then(dbpost => res.json(dbpost))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/recipeingredients', (req,res) => {
    RecipeIngredient.findAll({    
    })
    .then(dbpost => res.json(dbpost))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/users', (req,res) => {
    Users.findAll({    
    })
    .then(dbpost => res.json(dbpost))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;