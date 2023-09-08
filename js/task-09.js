function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color')
const output = document.querySelector('.color')
const body = document.body;
button.addEventListener('click' , changeColorFunction)
function changeColorFunction(event){
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  output.textContent = randomColor;

}




 
  
