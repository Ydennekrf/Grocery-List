const textButton = document.getElementById('text-me');
const groceryEl = document.getElementById('grocery-list');
var groceryList;

var userPhone;


// grabs the users phone data from the session cookie
getUserData = async() => {

    const response = await fetch('/api/users/sendMsg', {
        method: 'GET',
    })
    const userPhoneHelp = await response.json();
    userPhone = userPhoneHelp.phone
    getGrocery();
};
// renders the grocery list to the page
getGrocery = () => {
    groceryList = localStorage.getItem("GroceryList");
    groceryEl.append(groceryList);
}
// send the post request to fire the text message
sendText = async(event) => {
    event.preventDefault();
    groceryList = localStorage.getItem("GroceryList");
      
    const response = await fetch('/api/grocery/send', {
        method: 'POST',
        body: JSON.stringify({
            phone: userPhone, 
            list: groceryList
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (response.ok) {
        console.log(" grocery list sent");
    } else {
        console.log( 'unable to send text ');
    }
    
}



document.querySelector('#text-me').addEventListener('click', sendText);



getUserData();

