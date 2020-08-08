// regular function call method
function doubleIt(num){
  return num*2;
}

const result1 = doubleIt(5);
console.log(result1);

// function declaration method
const doubleIt2 = function (num) {
  return num * 2;
}
console.log(doubleIt2(10));


// arrow function method
const doubleIt3 = num => num * 2; //single parater function
console.log(doubleIt3(15));

const doubleIt4 = (num1, num2) => (num1 + num2)*2; // when it's multi parameter, have to use bracket ().
console.log(doubleIt4(10,15));

const greeting = () => 'Hello World.'
console.log(greeting());

const doubleIt5 = (x,y) => { //multi parater with multiline
  const add = (x+y);
  const sub = (x-y);
  const multiplication = add * sub;
  return multiplication;
}

console.log(doubleIt5(15,10));
