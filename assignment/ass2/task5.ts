function cUser(age:number) {
    if(age<12){
        console.log("Child");
    }
    else if(age>12&&age<19){
        console.log("Teenager")
    
    }
    else {
        console.log("Adult")
    }
}
cUser(10)
cUser(15)
cUser(20)