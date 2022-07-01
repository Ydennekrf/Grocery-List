const accountSid = 'AC96a9c8d61eb097adbe636e8174ed1a01';
const authToken = 'aa8fe373be9c9455d34dddd96650f0b3';
const twilio = require('twilio');



sendtext = () => {
    // let recipeData = JSON.parse(localStorage.getItem("recipeData"));
    // if (!recipeData) {
    //   console.log(err);  
    // } else {
    //     console.log(recipeData);
    // }
    

let recipeMsg = "hello world"
const client = new twilio(accountSid, authToken);
console.log(recipeMsg)

client.messages.create({
    body: `${recipeMsg}`,
    to: '+14168882462',
    from: '+18305875494'
})


};


sendtext();