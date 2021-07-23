// every()
// check if every element is greater than 0 
function checkPositive(arr) {
 return arr.every(num => num > 0)
 }
 console.log(checkPositive([1, 2, 3, -4, 5])); // false
 
 // some()
 // check if some elements are greater than 0 
 function checkPositive(arr) {
 return arr.some(num => num > 0)
 }
 console.log(checkPositive([1, 2, 3, -4, 5])); // true