const currentYear = 1947;
const nextYear = 2022;

function print15LeapYears(curYear, nextYr) {
    let leapYr = [];
    for(let i = curYear; i <nextYr; i++) {
        if(i % 4 === 0) {
            leapYr.push(i);
        }
        let length = leapYr.length;
        if(length === 15) {
            return leapYr;
        }
    }
    return leapYr;
}
const result = print15LeapYears(currentYear,nextYear);
console.log(result);