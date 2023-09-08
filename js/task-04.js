let counterValue = 0;
const increaseButton = document.querySelector('button[data-action="increment"]');
const decreaseButton = document.querySelector('button[data-action="decrement"]')
const ourNumber = document.querySelector('#value')

increaseButton.addEventListener('click',(event) => {
    counterValue += 1 
    ourNumber.textContent = counterValue;
})

decreaseButton.addEventListener('click', (event) =>{ 
    counterValue -=1
    ourNumber.textContent = counterValue


})




