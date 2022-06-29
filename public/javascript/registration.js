function register(event){

    console.log(event)

    event.preventDefault();

 console.log(document.forms[0].checkValidity());
    fetch('api/register', {
        method: 'POST',
        body: JSON.stringify({
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            number: document.getElementById("number").value,
            password: document.getElementById("password").value,
            passwordConfirmation: document.getElementById("confirmPassword").value
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(data => data.json())
    .then(data =>  { 
        console.log(data);
        if(data.response){
            alert("Successfully Registered"); 
        } else{
            alert("Sorry, please try again.");
        } 
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })
};

