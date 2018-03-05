

for(var i=0; i<7; i++){
	switch (i){
		case 0:
			console.log("#");
			break;
		case 1:
			console.log("##");
			break;
		case 2:
			console.log("###");
			break;
		case 3:
			console.log("####");
			break;
		case 4:
			console.log("#####");
			break;
		case 5:
			console.log("######");
			break;
		case 6:
			console.log("#######");
			break;
		default:
			console.log("something went wrong");
			break;
	}
}

/*
	for loop cycles through 7 times (0 through 6)
	each time logging the correct number of hash tags

*/

function isEven(number){
	if(isNaN(number)){
		console.log("This is not a number")
	}else if((number%2) == 1){
		console.log("the number is odd");
	}else if((number%2) != 1){
		console.log("the number is even");
	}else{
		console.log("something went wrong");
	}
}

isEven("Paul");
isEven(15);
isEven(6);

/*
	function takes in a parameter
	determines if it is not a number - if it is not (true), logs This is not a number
	if isNAN is false then we determines if the number is odd by determining if the remainder is equal to 1 (log the number is odd)
	if the remainder is not equal to one then do that check and log the number is even
	if all of that is false then log something went wrong.

*/