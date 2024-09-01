let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalPriceEl.textContent = totalPrice.toFixed(2);
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert(`Total:$${totalPrice.toFixed(2)}\n Thank you for your purchase!`);
    cart = [];
    totalPrice = 0;
    updateCart();
});