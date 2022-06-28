const { Users } = require('../models');

const userSeed = [{
    username: "Fraser Kennedy",
    email: "ydennekrf@gmail.com",
    password: "password",
    phone: 4168882462
},
{
    username: "John Robson",
    email: "JRobson@gmail.com",
    password: "passpass123",
    phone: 4168882462
}
]

const usersSeeding = () => Users.bulkCreate(userSeed);

module.exports = usersSeeding;