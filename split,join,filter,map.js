// split()
function splitify(str) {
 return str.split(/\W/) // split using any thing that is not a word
 }
 console.log(splitify("Hello World,I-am code"));
 ////////////////////////////////////////////////////////////////////////////////////////////////////
// Split a string and join it using the join() method
function sentensify(str) {
 return str.split(/\W/).join(" ")
}
console.log(sentensify("May-the-force-be-with-you"));

// // Split a string and join it with - using the join() method, also convert it to lower case.
// Method 1
// function urlSlug(title) {
// return title.split(/\W/).filter(item =>{
//   return (item !== "")
// }).map(word =>{
//   return word.toLowerCase()
// }).join("-")
// }
//Method 2
// function urlSlug(title) {
//   return title
//     .toLowerCase()
//     .trim()
//     .split(/\s+/)
//     .join("-");
// }
//Method 3
function urlSlug(title) {
 return title.split(" ").filter(item =>item !== "")
 .join("-").toLowerCase()
 }
 console.log(urlSlug(" Winter Is  Coming"))
 console.log(urlSlug("Winter Is Coming"))
 console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
 console.log(urlSlug("Hold The Door"))