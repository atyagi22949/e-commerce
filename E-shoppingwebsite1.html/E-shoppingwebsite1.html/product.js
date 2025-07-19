document.addEventListener('DOMContentLoaded', function() {
    // Add "Add to Cart" buttons to each product
    document.querySelectorAll('.col-4').forEach(function(product, idx) {
        let btn = document.createElement('button');
        btn.textContent = 'Add to Cart';
        btn.className = 'add-to-cart-btn';
        btn.style.marginTop = '10px';
        btn.onclick = function() {
            let name = product.querySelector('h4').textContent;
            let price = product.querySelector('p').textContent;
            let img = product.querySelector('img').src;
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({ name, price, img });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Added to cart!');
        };
        product.appendChild(btn);
    });
});
