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


// Functions Problem Set
console.log("************************************************");
console.log("Below are the practice functions from Unit 3 / Lesson 1 / Project 5.");
console.log('\n');

// Addition
// Below is addition being done with a custom reduce function.

console.log("The below functions return the sum of elements in an array.");
var vals = [10, 10, 10, 10, 10];
function myReduce(array, myCallback, start){
	var current = start;
	for (var i = 0; i < array.length; i++){
		current = myCallback(current, array[i]);
	}
	return current;
}

var final = myReduce(vals, function(a, b){
	return (a + b);
}, 0);

console.log(final);


// Determine whether a word is a pallindrome.

console.log("This is the pallindrome problem set.");
var pal = "racecar";
var notPal = "oink";
function pallindrome(word){
	var reverse = "";
	for (i = word.length -1; i >= 0; i--){
		reverse += word.charAt(i);
	}
	if (word === reverse){
		return true;
	} else {
		return false;
	}
}

console.log("Is", pal, "a pallindrome?", pallindrome(pal));
console.log("Is", notPal, "a pallindrome?", pallindrome(notPal));


var sentence = "I am happy you are reading this sentence";
// QUESTION:  How could I have used the reduce function for this?
// Would I have to create a new array whose elements are the lengths of each word?
function stringTool(sentence){
	var total = 0;
	var wordsArray = sentence.split(" ");
	var numWords = wordsArray.length;
	var avgChars = 0;
	for (var i = 0; i < wordsArray.length; i++){
		total += wordsArray[i].length;
	}
	avgChars = total/numWords;
	console.log("This string has", numWords, "words. The avg length of each word is", avgChars, "characters.");
}
stringTool(sentence);











