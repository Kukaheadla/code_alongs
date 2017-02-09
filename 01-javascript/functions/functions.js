console.log('fun fun functions');

var numberWeTellTheWorld = 5000; //global variable

var launchMissile = function (){
  var numberOfMissiles = 0; // local variable
  console.log('missed');
}

var hello = function(name){//parameter
  var name =
  console.log('hello' + name)
}

hello(' fullslack'); //argument

var doubleMe = function(number){
  return number*2;
}
//WTF!!!!

var calmYourself = function(comment){

// var ExclamationRm = comment.split(!)[0]
// var lowercased = input.toLowerCase();
// var result = commeent.toLowerCase().split('!')[0];
return comment.toLowerCase().split('!')[0]
}

calmYourself('BREXIT IS HAPPENING!!!!');
