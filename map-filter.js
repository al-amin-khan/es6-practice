const numbers = [5, 85, 56,84, 3, 98, 9, 20, 15];


let squreNumbers = numbers.map(x => x*x);
console.log(squreNumbers);

const filterNumber = numbers.filter(x => x > 10);
console.log(filterNumber);

const findNumbers = numbers.find(x => x > 5);
console.log(findNumbers);
