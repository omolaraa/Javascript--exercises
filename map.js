// 1) Make an array of numbers that are doubles of the first array.

const doubleNums = arr => {
 const newArr = arr.map(num => num * 2)
 return newArr
}
console.log(doubleNums([2, 5, 100]))

// 2) Take an array of numbers and make them strings
function stringItUp(arr){
  const newArr = arr.map(num => num.toString())
  return newArr
}
console.log(stringItUp([2, 5, 100]))

//OR
const stringItUp2 = arr => {
 const newArr = arr.map(String)
 return newArr
}
console.log(stringItUp2([2, 5, 100]))


