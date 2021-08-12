const doubleIt = num => num*2;

console.log(doubleIt(12));

const add = (num1, num2) => num1 + num2;

console.log(add(3, 2));

const give5 = () => 5;
console.log(give5());

const subtract = (a,b) => a-b;

console.log(subtract(3,2));

const doSum = (x,y) => {
    const sum = x+y;
    const jam = x-y;
    const jum = sum + jam;
    return jum;
}

const d = doSum(3,4);
console.log(d);