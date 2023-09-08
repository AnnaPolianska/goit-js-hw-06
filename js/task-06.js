const input = document.querySelector('#validation-input')
input.addEventListener('blur' , Onblur)
const amountOfCharacters = input.getAttribute("data-length")

function Onblur(event){
    if(input.value.length > amountOfCharacters || input.value.length < amountOfCharacters){
      input.classList.add("invalid");
    } else {
      input.classList.replace("invalid" , "valid");
    }
        

  }
  