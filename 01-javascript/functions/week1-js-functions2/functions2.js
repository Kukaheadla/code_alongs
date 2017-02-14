// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here
function calculateAge (birthYear, currentYear){
  var actualAge = currentYear - birthYear;
  var anotherAge = actualAge - 1;
  console.log("You are either "+ actualAge + ' or '+ anotherAge);
}
calculateAge(1989, 2017);
calculateAge(1997,2017);
calculateAge(1972,2017);

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var input = ['cake','pudding'];
//output = [4,7]


var length = function (wordArray){
  var myArray =[];
  for(var i=0; i< wordArray.length; i++){
    myArray.push(wordArray[i].length)
  }
  return myArray;
}

console.log(length(input));

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrifier(x,y,z){
  return Math.pow((x*y),z) ;
};
console.log(transmogrifier(1,2,3));
// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here
var wordReverse = function( inputString ) {
 return inputString.split(' ').reverse().join(' ');

};

console.log(wordReverse('Hello World'));
//wordReverse('Hello World');
  // function reverse(input2){
//     return input2.split('').reverse().join('');
//   }
//   return reverse(input);
// };

// console.log(wordReverse(['a','b','c','d']));



//More exercise
// var students = ['Alfons','Aniko','Barry','Gatluak','Helmi','Julian','Kerry','Kevin','Marta','Samantha','Sandesh','Will','William','Zach']
//writea function which accepts 2 arguments
//the array
// groups of e.g.3

//return a nested array of groups
// [['marta','sam','mark']],['helmi','aniko'...]]
