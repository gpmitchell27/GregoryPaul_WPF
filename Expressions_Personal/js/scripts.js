//Gregory Mitchell Feb 13, 2014 Activity: Expression Personal
//Collect user input for calculating reps per week
var daysInput = prompt("I am collecting information to calculate how many repititions people do per week at the gym.\n\nHow many times per week do you workout?");
var numberofExerciseInput = prompt("How many exercises do you do while at the gym?");
var numberofSetsInput = prompt("How many sets total for all exercises?");
var totalRepsPerDay = numberofExerciseInput * numberofSetsInput; // multiply number of exercises by number of sets
//console.log(totalRepsPerDay) test for reps per day; 
var totalRepsPerWeek = totalRepsPerDay * daysInput; // total reps * daysInput for result
console.log("Based on your answers you do " + totalRepsPerWeek +  " total reps per week at the gym! WOW"); // Message to user after calculation is complete

//Collect user input to calculate the width of any element in HTML
var contentWidthInput = prompt("Have you ever wondered how to properly calculate the total width of an element in HTML? \n 
	Enter in some quick data and I'll calculate it for you! \n\n
	What is the width of your content?") 