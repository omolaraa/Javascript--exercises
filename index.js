// Exercise 1
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
// sumArr_1 = 0
// for (let i = 0; i < arr_1.length; i++) {
//  sumArr_1 += arr_1[i]
// }
// console.log(sumArr_1);

// sumArr_2 = 0
// for (let i = 0; i < arr_2.length; i++) {
//  sumArr_2 += arr_2[i]
// }
// console.log(sumArr_2);
// console.log(sumArr_1+sumArr_2)

// Exercise 2
// Using a for loop print all even numbers up to and including n. Don’t include 0.
// let n1 = 22; 
// for(let i = 2; i <= n1; i+=2){
//  console.log(i)
// }

// Exercise 3
// Using a for loop output the elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// for(let i = arr.length-1; i >=0; i--){
//  console.log(arr[i]);
// }

// Exercise 4
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// let arr_3 = [4, 6, 7];
// let arr_4 = [8, 1, 9];
// total = []
// for (let i = 0; i < arr_3.length; i++) {
//  let sum = arr_3[i] + arr_4[i]
//  total.push(sum)
// }
// console.log(total)

// Exercise 5
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.
// let str1 = "javascript";
// for (let i = 0; i < str1.length; i++) {
//  if (i % 2 !== 0) {
//   console.log('Z')
//  } else {
//   console.log(str1[i])
//  }
// }

// Exercise 6
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// let str2 = "don’t know why";
// for (let str of str2) {
//  if (str === 'y') {
//   console.log('yes')
//  } else {
//   console.log('no')
//  }
// }

// Exercise 7
// Given a number n Calculate the factorial of the number
let n2 = 4;
let mult = 1;
for (let i = n2; i > 0; i--) {
 mult = mult * i
}
console.log(mult)

// Exercise 8
// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
// let pin = 0704;
// let guess;
// console.log('Please make your guess: ')
// for (let count of pin) {
//  if (guess !== pin) {
//   console.log('Sorry that was wrong.')
//   console.log('Please make your guess: ')
//  } else {
//   console.log('That was correct!')
//  }
// }

// Exercise 9
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.
// let str3 = "racecar";
// let str4 = "Java";
// let str3Pal = '';
// let str4Pal = '';
// for (let i = str3.length - 1; i >= 0; i--) {
//  str3Pal += str3[i]
// }
// if (str3 === str3Pal) {
//  console.log('String 1 palindrome? \n Yes')
// } else {
//  console.log('String 1 palindrome? \n No')
// }
// for (let j = str4.length - 1; j >= 0; j--) {
//  str4Pal += str4[j]
// }
// if (str4 === str4Pal) {
//  console.log('String 2 palindrome? \n Yes')
// } else {
//  console.log('String 2 palindrome? \n No')
// }

// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
let num1 = 2;
let num2 = 8;
let sumNum1 = 0;
let sumNum2 = 0;
for (let i = 0; i <= num1; i++) {
 sumNum1 += i;
}
console.log(sumNum1)

for (let j = 0; j <= num2; j++) {
 sumNum2 += j;
}
console.log(sumNum2)