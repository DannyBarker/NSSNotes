let btn = document.querySelector('#create_appointment');
btn.addEventListener('click', () => {
    let submitted_email = document.querySelector('#email').value
    fetch (`https://api.towerdata.com/v5/ev?email=${submitted_email}&api_key=${keys.email_key}`)
    .then( email => email.json())
    .then( checkEmail => {
        if (checkEmail.email_validation.status !== "valid") {
            alert("Invalid Email!")
        }  
    })

})
