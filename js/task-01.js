const categoryList = document.querySelector(`#categories`);
// console.log(`Number of categories: ${categoryList.children.length}`);

const titleList = document.querySelectorAll(`h2`);

console.log([...categoryList.children].forEach(item => {
    // console.log(item)
    console.log(item.firstElementChild.textContent)
    console.log(item.lastElementChild.children.length)
}))


// titleList.forEach(item => {
//     const title = item.textContent
//     console.log(`Category: ${title}`)
//     console.log(`Elements: ${title.length}`)
// })
