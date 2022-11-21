//Grade A student with answers and Keys
const array1 = ['B','C','A','C','B','C','D','A','B','A'];
const array2 =    ['C','B','A','C','B','C','B','A','C','A'];

function gradeAStudent(answers, keys) { 
    let points = 0; 
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === keys[i]) { 
            points = points + 1;      
        }        
    }
    if(points <= 3) { 
        return 'Grade - D'
    } 
    if(points <= 5) { 
        return 'Grade - C'
    } 
    if(points <= 8) { 
        return 'Grade - B' 
    } 
    if(points > 8) {
        return 'Grade - A'
    }   
}
const result = gradeAStudent(array1,array2);
console.log(result);