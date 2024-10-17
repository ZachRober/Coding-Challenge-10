const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const totalPrice = document.getElementById('total-price');
const sizeSelector = document.getElementById('size-selector');
const purchase = document.getElementById('purchase');

sizeSelector.addEventListener('change',(event)=>{
const realPrice = event.target.value;
productPrice.textContent = `$${realPrice}`;
const option = event.target.options[event.target.selectedIndex];
if(option.text.includes("In Stock")){
    purchase.disabled = false;
}
else{
    purchase.disabled=true;
    productPrice.textContent = ("Item is out of stock");
}
});
purchase.addEventListener('click',()=>{
    alert("Purchase complete");
    })
