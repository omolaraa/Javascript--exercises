// Example 1: accessing functions through an array and an object.
function add(x, y) {
 return x + y;
}
function subtract(x, y) {
 return x - y;
}
function multiply(x, y) {
 return x * y;
}
function divide(x, y) {
 return x / y;
}

const operations = [add, subtract, multiply, divide]

for (let func of operations) {
 let result = func(30, 5)
 console.log(result)
}

const thing = {
 doSomething: multiply
}
console.log(thing.doSomething(4, 5))

// Example 2: accepting functions as arguments
function cry() {
 console.log(`I'm soo sad`)
}
function rage() {
 console.log(`I'm soo angry`)
}
// repeat an action a certain number of times
function repeatNTimes(action, num) {
 for (let i = 0; i < num; i++) {
  action();
 }
}
console.log(repeatNTimes(cry, 5))
console.log(repeatNTimes(rage, 6))

// pick an action/ function based on a random number

function pickOne(f1, f2) {
 let rand = Math.random();
 console.log(rand)
 if (rand <= 0.5) {
  f1();
 } else {
  f2();
 }
}
console.log(pickOne(cry, rage))

// Example 3: functions as return values
function multiplyBy(num) {
 return function (x) {
  return x * num
 }
}
const three = multiplyBy(3)
const four = multiplyBy(4)
console.log(three(2))
console.log(four(6))

// check if a number is between two other numbers
function makeBetweenFunc(x,y){
 return function(num){
  return x <= num && y >= num
 }
}
const isChild = makeBetweenFunc(0, 18)
console.log(isChild(30))