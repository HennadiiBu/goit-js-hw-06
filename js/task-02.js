const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`ul`);

const item1 = document.createElement(`li`);
item1.textContent = ingredients[0];
item1.classList.add(`item`)

const item2 = document.createElement(`li`);
item2.textContent = ingredients[1];
item2.classList.add(`item`)

const item3 = document.createElement(`li`);
item3.textContent = ingredients[2];
item3.classList.add(`item`)

const item4 = document.createElement(`li`);
item4.textContent = ingredients[3];
item4.classList.add(`item`)

const item5 = document.createElement(`li`);
item5.textContent = ingredients[4];
item5.classList.add(`item`)

const item6 = document.createElement(`li`);
item6.textContent = ingredients[5];
item6.classList.add(`item`)


list.append(item1,item2,item3,item4,item5,item6)



