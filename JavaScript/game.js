//create secret number
var secNum = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if (guess === secNum){
	alert("you got it right")
}
else{
	alert("ou got it wrong")
}