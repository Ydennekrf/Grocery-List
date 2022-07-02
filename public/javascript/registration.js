function register(event){

    console.log(event)

    event.preventDefault();

 console.log(document.forms[0].checkValidity());
    fetch('api/users', {
        method: 'POST',
        body: JSON.stringify({
            Name: document.getElementById("#name-signup").value,
            email: document.getElementById("#email-signup").value,
            number: document.getElementById("#number-signup").value,
            password: document.getElementById("#password-signup").value,
           
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

