const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const itemEl = ingredients.reduce((str, ingredient) => str + `<li>${ingredient}</li>`,'');
ingredientsEl.innerHTML = itemEl;
console.log(ingredientsEl);

