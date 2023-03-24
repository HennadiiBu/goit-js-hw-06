const categoryList = document.querySelector(`#categories`);
console.log(`Number of categories: ${categoryList.children.length}`);
const titleList = document.querySelectorAll(`h2`);
titleList.forEach(item => {
    const title = item.textContent
    console.log(`Category: ${title}`)
    console.log(`Elements: ${title.length}`)
})
