document.addEventListener('DOMContentLoaded', async () => {

   const downloadedProducts = await fetchProducts();
   
  async function fetchProducts() {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data);
        return response.data;
    }

    async function fetchProductByCategory(category){
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        console.log(response.data);
        return response.data;
    }

   async function populateProducts(flag, customProducts){
    let products = customProducts;
    const queryParamsObject = getQueryParams();
    console.log(queryParamsObject);
    if(!flag){
        if(queryParamsObject['category']){
            products = await fetchProductByCategory(queryParamsObject['category']);
        }else{
            products = downloadedProducts;
        }
    }
    const productList = document.getElementById('productList'); 
    products.forEach( (product) => {
        const productItem = document.createElement('a');
        productItem.target = '_blank';
        productItem.classList.add("product-item", "text-decoration-none","d-inline-block");
        productItem.href = `productDetails.html?id=${product.id}`;



        const productImage = document.createElement('div');
        const productName = document.createElement('div');
        const productPrice = document.createElement('div');


        productImage.classList.add("product-img");
        productName.classList.add("product-name" ,"text-center");
        productPrice.classList.add("product-price", "text-center");

 
        productName.textContent = product.title.substr(0,12) + "...";
        productPrice.innerHTML = `&#8377; ${product.price}`;
        const imageInsideProductImage = document.createElement('img');
        imageInsideProductImage.src = product.image;

        productImage.appendChild(imageInsideProductImage);
        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

        
        productList.appendChild(productItem);

    });
   }

   const filterSearch = document.getElementById('search');
   filterSearch.addEventListener('click', async () => {
    const productList = document.getElementById('productList');
    productList.innerHTML='';
    const minPrice = Number(document.getElementById('minPrice').value);
    const maxPrice = Number(document.getElementById('maxPrice').value);
    const products = downloadedProducts; 
    console.log(products);
    console.log(minPrice);
    console.log(maxPrice);
    const filteredProducts = products.filter( (product) => {
        return product.price >= minPrice && product.price <=maxPrice
    });
    populateProducts(true, filteredProducts); 

   });

   const clearFilter = document.getElementById('clear');
   clearFilter.addEventListener('click', () => {
    window.location.reload();
   })

   async function fetchCategories(){
    //every async function returns a promise
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        return data;
    }

    async function populateCategories(){
        const categories = await fetchCategories();
        const categoryList = document.getElementById('categoryList');
        categories.forEach( (category) => {
            const categoryElement = document.createElement('a');
            categoryElement.classList.add('d-flex', 'text-decoration-none');
            categoryElement.href=`productList.html?category=${category}`;
            categoryElement.textContent = category;

            categoryList.appendChild(categoryElement); 
        })
    }

   populateProducts(false);
   populateCategories();

})