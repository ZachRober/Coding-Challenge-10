const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const totalPrice = document.getElementById('total-price');
const sizeSelector = document.getElementById('size-selector');
const purchase = document.getElementById('purchase');
const unorderedList = document.getElementById('uolist');
const addProductForm = document.getElementById('add-size');
const productBtn = document.getElementById('productBtn');
const productList = document.getElementById('productlist')
const outerDiv = document.getElementById('outerDiv');

sizeSelector.addEventListener('change',(event)=>{
const realPrice = event.target.value;
productPrice.textContent = `$${realPrice}`;//drop down shows price
const option = event.target.options[event.target.selectedIndex]
if(option.text.includes("In Stock")){//if the product is in stock button shows up
    purchase.disabled = false;
}
else{
    purchase.disabled=true;
    productPrice.textContent = ("Item is out of stock");
}
});
purchase.addEventListener('click',()=>{
    alert("Purchase complete");//alerts you when purchase completes
    })

outerDiv.addEventListener("click",(x)=>{
    const addSize=document.createElement('option');
    addSize.value=prompt("Enter a new price");
    addSize.textContent=` ${productList.value} - In Stock`;
    sizeSelector.appendChild(addSize);

})
productBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const newProduct=document.createElement('li');
    newProduct.textContent = productList.value;
    unorderedList.appendChild(newProduct);//add new products to a bullet list
    
})