// splice() mutates the original arrat but slice() creates a new one.
function nonMutatingSplice(cities) {
 return cities.slice(0, 3);
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
// slice()
function sliceArray(anim, beginSlice, endSlice) {
 return anim.slice(beginSlice, endSlice)
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));