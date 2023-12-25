function getQueryParams(){
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    return queryParamsObject;
}

async function fetchProdcutById(id){
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
}

async function fetchCartById(id){
    const cart = await axios.get(`https://fakestoreapi.com/carts/${id}`);
    return cart.data;
}