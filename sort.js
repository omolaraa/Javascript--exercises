// sort() 
// sort an array without mutating the original array.
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
const nums = arr.slice(0)
const newArr = [].concat(nums)
newArr.sort((a,b) =>{
  return a-b
})
return newArr
}
console.log(nonMutatingSort(globalArray));
// sort an array of alphabets
function alphabeticalOrder(arr) {
return arr.sort((a,b) =>{
 if (a < b){  // if the first letter is smaller than the first, switch places
   return -1
 }else if(b < a){  // if the second letter is smaller than the first, stay in place
   return 1
 }else  // if the letters are the same, nothing happens
 return 0
})
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));