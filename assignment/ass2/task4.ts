function discont(
    price:number
) {
    
    if(price>100){
        const dPrice=(price*(100-10)/100);
        console.log("your price with 10% discount", dPrice);
    }
    else{
        const dPrice=(price*(100-5)/100);
        console.log("your price with 5% discount", dPrice);
    }
}
discont(80)
discont(120)