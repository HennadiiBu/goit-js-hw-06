const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`ul`);
const markup = [];

for (let i = 0; i < ingredients.length; i++){
  const item = document.createElement(`li`);
item.textContent = ingredients[i];
  item.classList.add(`item`);
  markup.push(item);
}
list.append(...markup);


