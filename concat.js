// concat() array
// The push() method mutates the original array but concat() creates a new array.
function nonMutatingPush(original, newItem) {
 return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingPush(first, second));

 /////////////////////////////////////////////////////////////////////////////////////////////////////////
 // concat() string
 function nonMutatingConcat(original, attach) {
  return original.concat(attach)
 }
 var first = "Lara";
 var second = " Osunleye";
console.log( nonMutatingConcat(first, second));
