//  const number = [1,2,3,4,5];
// //  const output = [];

// //  for (let i = 0; i < number.length; i++) {
// //      const element = number[i];
// //      const result = element * element;
// //      output.push(result);
// //  }

// //  console.log(output);

// const result = number.map(x => x*x);
// console.log(result);

const numbers = [21, 3, 2, 4];
const square = numbers.map(x => x * x);
console.log(square);

const bigger = numbers.filter(x => x > 3);
console.log(bigger);

const students = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Joh'},
    {id: 3, name: 'Johnn'}
]

const studentNames = students.map(x=>x.name);
console.log(studentNames);