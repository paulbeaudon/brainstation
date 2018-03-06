var board = "";
for(var i=0; i<8; i++){
	if((i%2) != 1){
		board += "# # # # \n";
	}else{
		board += " # # # #\n";
	}
}

console.log(board);