const router = require('express').Router();
const { Grocery, Recipes, Users, Ingredients, RecipeIngredient } = require('../../models');
const  Units  =require('../../models/units');
const withAuth = require('../../utils/auth');
// get all recipe data
router.get('/', async (req, res) => {
    try {
      const locationData = await Recipes.findAll();
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;