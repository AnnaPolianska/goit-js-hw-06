const control = document.querySelector('#font-size-control')
const span = document.querySelector('#text');
control.addEventListener('change' , (event) => {
  const selectedOption = `${event.currentTarget.value}px`
  span.style.fontSize = selectedOption;
})


