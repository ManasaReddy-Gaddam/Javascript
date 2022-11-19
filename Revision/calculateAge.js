
const cDate = 19;
const cMonth = 11;
const cYear  = 2022;
const birthDate = 15;
const birthMonth = 12;
const birthYear = 1995;
function calculateCurrentAge(currentDate, currentMonth, currentYear, birthDate, birthMonth, birthYear) { 
    let age = currentYear - birthYear;
    if(currentMonth < birthMonth)
        age = age - 1; 
    if(currentMonth === birthMonth)
        if(currentDate < birthDate)
            age = age - 1;
    return age;
}
let result = calculateCurrentAge(cDate, cMonth, cYear,birthDate,birthMonth,birthYear);
console.log(result);