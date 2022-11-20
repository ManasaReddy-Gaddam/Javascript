const students = [
    {
        name: 'Manasa',
        score: 15,
        quota: 'sports'
    },
    {
        name: 'Saritha',
        score: 18,
        quota: 'army'
    },
    {
        name: 'Kalpana',
        score: 15,
        quota: 'army'
    },
    {
        name: 'Rajesh',
        score: 23,
        quota: 'sports'
    },
    {
        name: 'Divya',
        score: 19,
        quota: 'sports'
    },
    {
        name: 'Kishore',
        score: 15,
        quota: 'army'
    }
];
function addBonusMarksToStd(std) {
    let newStudents = [];
    for (let i = 0; i < std.length; i++) {
        if (std[i].quota === 'sports') {
            std[i].score = std[i].score + 10;
        }
        newStudents.push(std[i]);
    }
    return newStudents;
}
const result = addBonusMarksToStd(students);
console.log(result);