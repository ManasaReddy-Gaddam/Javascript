const students = [
    {
        nsme: 'msnssa',
        class: '10th',
        marks: {
            telugu: 85,
            hindi:76,
            english:82,
            maths: 69,
            science: 71,
            social: 66
        }
    },
    {
        nsme: 'sadhana',
        class: '10th',
        marks: {
            telugu: 95,
            hindi:97,
            english:87,
            maths: 99,
            science: 61,
            social: 72
        }
    },
    {
        nsme: 'priya',
        class: '10th',
        marks: {
            telugu: 42,
            hindi:56,
            english:65,
            maths: 94,
            science: 88,
            social: 66
        }
    },
    {
        nsme: 'seetha',
        class: '10th',
        marks: {
            telugu: 87,
            hindi:74,
            english:62,
            maths: 48,
            science: 77,
            social: 86
        }
    },
    {
        nsme: 'Kalyani',
        class: '10th',
        marks: {
            telugu: 85,
            hindi:76,
            english:82,
            maths: 69,
            science: 71,
            social: 66
        }
    },
    {
        nsme: 'Kranthi',
        class: '10th',
        marks: {
            telugu: 87,
            hindi:96,
            english:48,
            maths: 29,
            science: 77,
            social: 58
        }
    },
];

function addTotalMarksOfAStudent(students) {
    for(let i = 0; i < students.length; i++) {
        let student = students[i];
        let marks = student.marks;
        console.log(marks);
        let keys = Object.keys(marks);
        console.log(keys);
        let total = 0;
        for(let j = 0; j < keys.length; j++) {
            total = total + marks[keys[j]];
            console.log(total);
        }
        student['total'] = total;
    }
    console.log(students);
}
addTotalMarksOfAStudent(students);