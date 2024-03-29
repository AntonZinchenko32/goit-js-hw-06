const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryElementsCounter = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElementsCounter}`);
});
