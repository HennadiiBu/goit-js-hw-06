const categoryList = document.querySelector(`#categories`);
console.log(`Number of categories: ${categoryList.children.length}`);

const titleList = document.querySelectorAll(`h2`);

[...categoryList.children].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})


