// write a programe that calculate the dicount for a product base on this price 
var price:number=80;
if(price>100){
    var sPrice=price*((100-10)/100);
    console.log(`your price of product after 10% discount  ${sPrice}`);
}
else{
    var dPrice=price*((100-5)/100)
console.log(`your price of product after 5% discount  ${dPrice}`)
}