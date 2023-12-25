document.addEventListener('DOMContentLoaded', () => {
    async function populateCart(){
        const cart = await fetchCartById(1);
        const cartProdcuts = cart.products;
        let productQuantityMapping = {};
        const cartProductsDownloadPromise = cartProdcuts.map(product => {
            productQuantityMapping[product.productId] = product.quantity;
            return fetchProdcutById(product.productId);
        });
        const products = await Promise.all(cartProductsDownloadPromise);
        products.forEach(product => {
            console.log(product.id, product.title, product.price, productQuantityMapping[product.id]);
        });

        let totalPrice = 0;
        products.forEach( product => {
            totalPrice+=product.price;
        });
        document.getElementById('total-price').textContent = totalPrice;
        document.getElementById('net-price').textContent = totalPrice - 10;
        
    }
    populateCart();
})