// map()
 // 1) Make an array of numbers that are doubles of the first array.

 const doubleNums = arr => {
  const newArr = arr.map(num => num * 2)
  return newArr
 }
 console.log(doubleNums([2, 5, 100]))
 
 // 2) Take an array of numbers and make them strings
 function stringItUp(arr) {
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
  ////////////////////////////////////////////////////////////////////////////////////////////////////
 
  // reduce()
  const votes = ['y', 'y', 'n', 'y', 'n', 'n', 'y']
 // const result = votes.reduce((tally, currentVote) => {
 //  if(tally[currentVote]) {
 //   tally[currentVote]++
 //  }else{
 //   tally[currentVote] = 1;
 //  }
 //  return tally
 // },{})
 
 // Method 2
 const result = votes.reduce((tally, currentVote) => {
  tally[currentVote] = (tally[currentVote] || 0) + 1  // whether tally[currentVote] exists or not add 1.
  return tally;
 }, {}) // {}-- initial value = tally
 //////////////////////////////////////////////////////////////
  // map(), filter(), reduce()
 
 const squareList = arr => {
  //Method 1
  // const newArr = arr.filter(item =>{
  //   return (item > 0 && Number.isInteger(item))
  // }).map(num => num * num)
  // return newArr;
  //Method 2
  const newArr = arr.filter(item =>{
    return (item > 0 && Number.isInteger(item))
  }).reduce((squaredNums, num) =>{
    return squaredNums.concat(num*num)
  }, [])
  return newArr
 };
 
 const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
 console.log(squaredIntegers);
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var watchList = [
//  {
//    "Title": "Inception",
//    "Year": "2010",
//    "Rated": "PG-13",
//    "Released": "16 Jul 2010",
//    "Runtime": "148 min",
//    "Genre": "Action, Adventure, Crime",
//    "Director": "Christopher Nolan",
//    "Writer": "Christopher Nolan",
//    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//    "Language": "English, Japanese, French",
//    "Country": "USA, UK",
//    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//    "Metascore": "74",
//    "imdbRating": "8.8",
//    "imdbVotes": "1,446,708",
//    "imdbID": "tt1375666",
//    "Type": "movie",
//    "Response": "True"
//  },
//  {
//    "Title": "Interstellar",
//    "Year": "2014",
//    "Rated": "PG-13",
//    "Released": "07 Nov 2014",
//    "Runtime": "169 min",
//    "Genre": "Adventure, Drama, Sci-Fi",
//    "Director": "Christopher Nolan",
//    "Writer": "Jonathan Nolan, Christopher Nolan",
//    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//    "Language": "English",
//    "Country": "USA, UK",
//    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//    "Metascore": "74",
//    "imdbRating": "8.6",
//    "imdbVotes": "910,366",
//    "imdbID": "tt0816692",
//    "Type": "movie",
//    "Response": "True"
//  },
//  {
//    "Title": "The Dark Knight",
//    "Year": "2008",
//    "Rated": "PG-13",
//    "Released": "18 Jul 2008",
//    "Runtime": "152 min",
//    "Genre": "Action, Adventure, Crime",
//    "Director": "Christopher Nolan",
//    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//    "Language": "English, Mandarin",
//    "Country": "USA, UK",
//    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//    "Metascore": "82",
//    "imdbRating": "9.0",
//    "imdbVotes": "1,652,832",
//    "imdbID": "tt0468569",
//    "Type": "movie",
//    "Response": "True"
//  },
//  {
//    "Title": "Batman Begins",
//    "Year": "2005",
//    "Rated": "PG-13",
//    "Released": "15 Jun 2005",
//    "Runtime": "140 min",
//    "Genre": "Action, Adventure",
//    "Director": "Christopher Nolan",
//    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//    "Language": "English, Urdu, Mandarin",
//    "Country": "USA, UK",
//    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//    "Metascore": "70",
//    "imdbRating": "8.3",
//    "imdbVotes": "972,584",
//    "imdbID": "tt0372784",
//    "Type": "movie",
//    "Response": "True"
//  },
//  {
//    "Title": "Avatar",
//    "Year": "2009",
//    "Rated": "PG-13",
//    "Released": "18 Dec 2009",
//    "Runtime": "162 min",
//    "Genre": "Action, Adventure, Fantasy",
//    "Director": "James Cameron",
//    "Writer": "James Cameron",
//    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//    "Language": "English, Spanish",
//    "Country": "USA, UK",
//    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//    "Metascore": "83",
//    "imdbRating": "7.9",
//    "imdbVotes": "876,575",
//    "imdbID": "tt0499549",
//    "Type": "movie",
//    "Response": "True"
//  }
// ];

// map()
var ratings = [];
const titleRating = watchList.map(list =>{
 return ratings.push({title:list["Title"], rating:list["imdbRating"]})
});

console.log(JSON.stringify(ratings));

// map() and filter()
// Method 1
const filteredList = watchList.filter(list =>{
 return parseFloat(list["imdbRating"]) >= 8
}).map(subList => {
 return ({"title":subList["Title"], "rating":subList["imdbRating"]})
})
// Method 2
// const filteredList = watchList.map(list =>{
//   return ({"title":list["Title"], "rating":list["imdbRating"]})
// }).filter(subList =>{
//   return parseFloat(subList["rating"]) >= 8
// });

console.log(filteredList)

// reduce()
// Get the average rating of all the movies directed by Christopher Nolan
function getRating(watchList){
 let count= 0;
 const averageRating = watchList.reduce((sum, movie) =>{
   if(movie.Director === "Christopher Nolan"){
     count++
   return (sum + parseFloat(movie.imdbRating))
   }
   return sum
 },0)/count
 return averageRating;
}
console.log(getRating(watchList));