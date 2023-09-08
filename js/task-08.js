const Registerform = document.querySelector(".login-form")
 Registerform.addEventListener('submit' , handleSubmitFunction)
 function handleSubmitFunction(event){
    event.preventDefault()
    const form = event.currentTarget;
     const email =  form.elements.email.value;
     const password = form.elements.password.value;
     if (email === "" || password === "") {
        return alert("Please fill in all the fields!");
      }
      console.log()
 const user = {
   email : email , 
   password : password 
};
console.log(user)

    form.reset()
 }

