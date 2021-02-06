var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;

document.getElementById("submitguess").onclick = function() {
	var x = document.getElementById("guessField").value;

	if(x == y) {
		alert("Congratulations !! You guessed it right in " + guess + " guess");		
	}
	else if(x > y) {
		guess++;
		alert("Sorry !! try with smaller number.");		
	}
	else {
		guess++;
		alert("sorry!! try with greater number.");
	}
}