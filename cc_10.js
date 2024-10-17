const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const totalPrice = document.getElementById('total-price');
const sizeSelector = document.getElementById('size-selector');
const purchase = document.getElementById('purchase');

sizeSelector.addEventListener('change',(event)=>{
const realPirce = event.target.value;
productPrice.textContent = `$${realPirce}`;
});
purchase.addEventListener('click',(event)=>{
event.preventDefault(); //prevents page from refreshing on submission
if(event.target.boolean===true){
    alert("You have completed your purchase");
    sizeSelector.reset();
}
else{
    purchase.disable = true;
    alert("Item is out of stock");
}
})

