// FIZZBUZZ REFACTOR: CHALLENGE
// 

var number = prompt("Please pick a positive whole number.");

function fizzy(myNumber){
	myNumber = +myNumber;
	console.log("You entered", myNumber);
	if ( (myNumber === NaN) || (myNumber < 1) ){
		number = prompt("Doh! You didn't enter a positive whole number, try again.");
		fizzy(number);
	} else {
		for (var i = 1; i <= myNumber; i++){
			if ((i%3 === 0) && (i%5 === 0)){
				console.log("fizz buzz");
			}else if (i%3 === 0){
				console.log("fizz");
			}else if (i%5 === 0){
				console.log("buzz");
			}else {
				console.log(i);
			}
		}
	}
}
fizzy(number);






















// Practice Functions
console.log("************************************************");
console.log("Below are the practice functions from Unit 3 / Lesson 1 / Project 3.");
console.log('\n');


var names = ['Bob','Brenda','Ishmael', "Earl", "Michael", "Jackson", "Marylin", "Monroe"]
var complement = " is the bomb!"
var complementGiver = function(names, complement){
	var newbie = [];
	for (var i = 0; i < names.length; i++){
		newbie.push(names[i] + complement);
	}
	return newbie;
}
console.log("This is he new array created looping through the array and pushing to a new one.");
console.log( complementGiver(names, complement) );



var checkItOut = names.map(function(name){
	return name + complement;
});
console.log("This is the new names array using map.", checkItOut);



var count = 0;
function counter(){
	count++;
	console.log("This is the current value of count:", count);
}
counter();
counter();
counter();
