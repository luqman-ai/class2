function convWAndDays(givenDays:number) {
    let week=Math.floor(givenDays/7);
    let days:number=givenDays-(week*7)
    console.log(week ,"week and", days, "days");
    
}
convWAndDays(17);
convWAndDays(25);