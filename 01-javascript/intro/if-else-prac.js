var d = new Date();
var year = d.getFullYear();
if (year > 2015) {
	console.log("Greetings from the future!");
}
	else if ( year < 2015) {
		console.log("Whoa! Blast from the past!");
	}
	else {
		console.log("I'm in the present!");
		};

//Below is suggested answer

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

console.log(currentDate);

if (currentYear < 2017){
  console.log("Whao! Blast from past");
}
  else if (currentYear === 2017) {
    console.log("I'm in the present");
  }
  else {
    console.log('Greetings future');
  };
