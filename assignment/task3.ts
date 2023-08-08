// write a programe that convert days into weeks and days
var givenDays:number=17;
var weeks:number=Math.floor(givenDays/7);
var days=givenDays-(weeks*7);
console.log(`${weeks} weeks and ${days} days`);