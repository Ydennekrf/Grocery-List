const textButton = document.getElementById('text-me');
const groceryEl = document.getElementById('grocery-list');
var groceryList;

var userPhone;



getUserData = async() => {

    const response = await fetch('/api/users/sendMsg', {
        method: 'GET',
    })
    // .then((data) => console.log(data.phone))
    // .then(getGrocery());
    const userPhoneHelp = await response.json();

    userPhone = userPhoneHelp.phone
 
    getGrocery();
}
getGrocery = () => {
    groceryList = localStorage.getItem("GroceryList");
    groceryEl.append(groceryList);
    
 
  
}

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

