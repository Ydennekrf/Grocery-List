const { Units } = require('../models');

unitsSeed = [{
    name: 'grams'
},{
    name: 'KG'
},{
    name: 'L'
},{
    name: 'ML'
},{
    name: 'piece'
},{
    name: 'bunch'
}];

const unitsSeeding = () => Units.bulkCreate(unitsSeed);

module.exports = unitsSeeding;