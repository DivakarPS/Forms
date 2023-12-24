console.log("index JS loaded");


async function fetchCategories(){
    //every async function returns a promise
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data;
}

fetchCategories();
 
async function populateCategories(){
    const categories = await fetchCategories();
    const categoryList = document.getElementById('categoryList');
    categories.forEach( (category) => {
        const categoryHolder = document.createElement('div');
        const categoryLink = document.createElement('a');
        categoryLink.textContent = category;
        categoryLink.href="#";
        categoryHolder.classList.add("category-item", "d-flex", "allign-items-center", "justify-content-center");
        categoryHolder.appendChild(categoryLink);
        categoryList.appendChild(categoryHolder);
    })
}

populateCategories();