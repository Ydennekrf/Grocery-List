const twilio = require('twilio');
require('dotenv').config();

let groceryList = JSON.parse(localStorage.getItem("ingredientList"));

sendtext = () => {
    let recipeMsg = groceryList;
    const client = new twilio(accountSid, authToken);

    client.messages.create({
        body: `Here is your Grocery List for your selected meals: ${recipeMsg}`,
        to: `14168882462`,
        from: '+18305875494'
    })
}

console.log(groceryList);

getUserData = () => {
    const response = await fetch('/api/users/sendMsg', {
        method: 'GET',
        body: JSON.
    })
}