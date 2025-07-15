
function updateCartTotals() {
    let rows = document.querySelectorAll('.cart-page table tr');
    let subtotal = 0;
    for (let i = 1; i < rows.length; i++) {
        let priceCell = rows[i].querySelector('small');
        let qtyInput = rows[i].querySelector('input[type="number"]');
        let subtotalCell = rows[i].querySelectorAll('td')[2];
        if (priceCell && qtyInput && subtotalCell) {
            let price = parseFloat(priceCell.textContent.replace(/[^\d.]/g, ''));
            let qty = parseInt(qtyInput.value) || 1;
            let itemTotal = price * qty;
            subtotalCell.textContent = '₹' + itemTotal.toFixed(2);
            subtotal += itemTotal;
        }
    }
    document.querySelector('.total-price table tr:nth-child(1) td:nth-child(2)').textContent = '₹' + subtotal.toFixed(2);
    let tax = 30;
    document.querySelector('.total-price table tr:nth-child(2) td:nth-child(2)').textContent = '₹' + tax.toFixed(2);
    document.querySelector('.total-price table tr:nth-child(3) td:nth-child(2)').textContent = '₹' + (subtotal + tax).toFixed(2);
}

function removeCartItem(e) {
    e.preventDefault();
    let row = e.target.closest('tr');
    row.parentNode.removeChild(row);
    updateCartTotals();
}

function setupCart() {
    let qtyInputs = document.querySelectorAll('.cart-page input[type="number"]');
    qtyInputs.forEach(input => {
        input.addEventListener('change', updateCartTotals);
    });
    let removeLinks = document.querySelectorAll('.cart-page a[href=""]');
    removeLinks.forEach(link => {
        link.addEventListener('click', removeCartItem);
    });
    updateCartTotals();
}

document.addEventListener('DOMContentLoaded', setupCart);
