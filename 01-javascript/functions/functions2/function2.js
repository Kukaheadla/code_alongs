console.log('function2');
var addTwoNumbers = function(num1, num2){
  return num1 + num2;
}

// console.log(addTwoNumbers(5,2));

var awesomeObject = {};
awesomeObject.owner = 'me';
awesomeObject.addTwoNumbers = addTwoNumbers;

var bam = function(){
  console.log('bam!')
}

var setTimeour(bam,5000)
