// write a progrme that takes number of unit and calulate bill with giveb tax
var unit:number=300
if(unit>100&&unit<=200){
    var cal=unit*25;   //cal= calculation
    var totalBill=cal + (cal*0.10)
    console.log(`Your bill is ${totalBill} after 10% tax`)
}
else if(unit>200&&unit<500){
    var cal:number=unit*28;
    var totalBill=cal + (cal*0.15);
    console.log(`your bill is ${totalBill} after 15% tax`);
}
else if(unit>500){
    var cal= unit*30;
    var totalBill=cal + (cal*0.25);
    console.log(`your bill is ${totalBill} after 25% tax`)
}
else{
    var cal=unit*22;
    console.log(`your bill is ${cal}`);
}
    
