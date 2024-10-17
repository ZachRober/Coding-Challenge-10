const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const totalPrice = document.getElementById('total-price');
const sizeSelector = document.getElementById('size-selector');
const purchase = document.getElementById('purchase');

sizeSelector.addEventListener('change',(event)=>{
const realPirce = event.target.value;
productPrice.textContent = `$${realPirce}`;
});


