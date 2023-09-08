const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
;


const list = document.querySelector('#ingredients')

const elements = ingredients.map(option =>{
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = option ;

  return liElement;
})

list.append(...elements);

