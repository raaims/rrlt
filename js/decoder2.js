 var inputString = [];

function decode (inputString){
	var temp = [];
	for (var iCtr = 0; iCtr < inputString.length; iCtr++) {
		switch(inputString.charAt(iCtr)){
			    case 'W':
                    temp[iCtr] = 'A';
                    break;
                case 'w':
                    temp[iCtr] = 'a';
                    break;
                case 'V':
                    temp[iCtr] = 'B';
                    break;
                case 'v':
                    temp[iCtr] = 'b';
                    break;
                case 'U':
                    temp[iCtr] = 'C';
                    break;
                case 'u':
                    temp[iCtr] = 'c';
                    break;
                case 'T':
                    temp[iCtr] = 'D';
                    break;
                case 't':
                    temp[iCtr] = 'd';
                    break;
                case 'S':
                    temp[iCtr] = 'E';
                    break;
                case 's':
                    temp[iCtr] = 'e';
                    break;
                case 'R':
                    temp[iCtr] = 'F';
                    break;
                case 'r':
                    temp[iCtr] = 'f';
                    break;
                case 'Q':
                    temp[iCtr] = 'G';
                    break;
                case 'q':
                    temp[iCtr] = 'g';
                    break;
                case 'P':
                    temp[iCtr] = 'H';
                    break;
                case 'p':
                    temp[iCtr] = 'h';
                    break;
                case 'O':
                    temp[iCtr] = 'I';
                    break;
                case 'o':
                    temp[iCtr] = 'i';
                    break;
                case 'N':
                    temp[iCtr] = 'J';
                    break;
                case 'n':
                    temp[iCtr] = 'j';
                    break;
                case 'M':
                    temp[iCtr] = 'K';
                    break;
                case 'm':
                    temp[iCtr] = 'k';
                    break;
                case 'L':
                    temp[iCtr] = 'L';
                    break;
                case 'l':
                    temp[iCtr] = 'l';
                    break;
                case 'K':
                    temp[iCtr] = 'M';
                    break;
                case 'k':
                    temp[iCtr] = 'm';
                    break;
                case 'J':
                    temp[iCtr] = 'N';
                    break;
                case 'j':
                    temp[iCtr] = 'n';
                    break;
                case 'I':
                    temp[iCtr] = 'O';
                    break;
                case 'i':
                    temp[iCtr] = 'o';
                    break;
                case 'H':
                    temp[iCtr] = 'P';
                    break;
                case 'h':
                    temp[iCtr] = 'p';
                    break;
                case 'G':
                    temp[iCtr] = 'Q';
                    break;
                case 'g':
                    temp[iCtr] = 'q';
                    break;
                case 'F':
                    temp[iCtr] = 'R';
                    break;
                case 'f':
                    temp[iCtr] = 'r';
                    break;
                case 'E':
                    temp[iCtr] = 'S';
                    break;
                case 'e':
                    temp[iCtr] = 's';
                    break;
                case 'D':
                    temp[iCtr] = 'T';
                    break;
                case 'd':
                    temp[iCtr] = 't';
                    break;
                case 'C':
                    temp[iCtr] = 'U';
                    break;
                case 'c':
                    temp[iCtr] = 'u';
                    break;
                case 'B':
                    temp[iCtr] = 'V';
                    break;
                case 'b':
                    temp[iCtr] = 'v';
                    break;
                case 'A':
                    temp[iCtr] = 'W';
                    break;
                case 'a':
                    temp[iCtr] = 'w';
                    break;
                case 'Z':
                    temp[iCtr] = 'X';
                    break;
                case 'z':
                    temp[iCtr] = 'x';
                    break;
                case 'Y':
                    temp[iCtr] = 'Y';
                    break;
                case 'y':
                    temp[iCtr] = 'y';
                    break;
                case 'X':
                    temp[iCtr] = 'Z';
                    break;
                case 'x':
                    temp[iCtr] = 'z';
                    break;
                case ' ':
                    temp[iCtr] = ' ';
                    break;
                case '!':
                    temp[iCtr] = '!';
                    break;
                case '.':
                    temp[iCtr] = '.';
                    break;
                case ',':
                    temp[iCtr] = ',';
                    break;
                case '\'':
                    temp[iCtr] = '\'';
                    break;
                case '\n':
                    temp[iCtr] = '<br>';
                    break;
                case '"':
                	temp[iCtr] = '"';
                	break;
               	case '-':
               		temp[iCtr] = '-';
               		break;
               	case '?':
               		temp[iCtr] = '?';
               		break;
               	case '(':
               		temp[iCtr] = '(';
               		break;
               	case ')':
               		temp[iCtr] = ')';
               		break;
               	case '"':
               		temp[iCtr] = '"';
               		break;
		}
	}
	return temp;
};

function encode (inputString){
	var temp = [];
	for (var iCtr = 0; iCtr < inputString.length; iCtr++) {
		switch(inputString.charAt(iCtr)){
			    case 'A':
                    temp[iCtr] = 'W';
                    break;
                case 'a':
                    temp[iCtr] = 'w';
                    break;
                case 'B':
                    temp[iCtr] = 'V';
                    break;
                case 'b':
                    temp[iCtr] = 'v';
                    break;
                case 'C':
                    temp[iCtr] = 'U';
                    break;
                case 'c':
                    temp[iCtr] = 'u';
                    break;
                case 'D':
                    temp[iCtr] = 'T';
                    break;
                case 'd':
                    temp[iCtr] = 't';
                    break;
                case 'E':
                    temp[iCtr] = 'S';
                    break;
                case 'e':
                    temp[iCtr] = 's';
                    break;
                case 'F':
                    temp[iCtr] = 'R';
                    break;
                case 'f':
                    temp[iCtr] = 'r';
                    break;
                case 'G':
                    temp[iCtr] = 'Q';
                    break;
                case 'g':
                    temp[iCtr] = 'q';
                    break;
                case 'H':
                    temp[iCtr] = 'P';
                    break;
                case 'h':
                    temp[iCtr] = 'p';
                    break;
                case 'I':
                    temp[iCtr] = 'O';
                    break;
                case 'i':
                    temp[iCtr] = 'o';
                    break;
                case 'J':
                    temp[iCtr] = 'N';
                    break;
                case 'j':
                    temp[iCtr] = 'n';
                    break;
                case 'K':
                    temp[iCtr] = 'M';
                    break;
                case 'k':
                    temp[iCtr] = 'm';
                    break;
                case 'L':
                    temp[iCtr] = 'L';
                    break;
                case 'l':
                    temp[iCtr] = 'l';
                    break;
                case 'M':
                    temp[iCtr] = 'K';
                    break;
                case 'm':
                    temp[iCtr] = 'k';
                    break;
                case 'N':
                    temp[iCtr] = 'J';
                    break;
                case 'n':
                    temp[iCtr] = 'j';
                    break;
                case 'O':
                    temp[iCtr] = 'I';
                    break;
                case 'o':
                    temp[iCtr] = 'i';
                    break;
                case 'P':
                    temp[iCtr] = 'H';
                    break;
                case 'p':
                    temp[iCtr] = 'h';
                    break;
                case 'Q':
                    temp[iCtr] = 'G';
                    break;
                case 'q':
                    temp[iCtr] = 'g';
                    break;
                case 'R':
                    temp[iCtr] = 'F';
                    break;
                case 'r':
                    temp[iCtr] = 'f';
                    break;
                case 'S':
                    temp[iCtr] = 'E';
                    break;
                case 's':
                    temp[iCtr] = 'e';
                    break;
                case 'T':
                    temp[iCtr] = 'D';
                    break;
                case 't':
                    temp[iCtr] = 'd';
                    break;
                case 'U':
                    temp[iCtr] = 'C';
                    break;
                case 'u':
                    temp[iCtr] = 'c';
                    break;
                case 'V':
                    temp[iCtr] = 'B';
                    break;
                case 'v':
                    temp[iCtr] = 'b';
                    break;
                case 'W':
                    temp[iCtr] = 'A';
                    break;
                case 'w':
                    temp[iCtr] = 'a';
                    break;
                case 'X':
                    temp[iCtr] = 'Z';
                    break;
                case 'x':
                    temp[iCtr] = 'z';
                    break;
                case 'Y':
                    temp[iCtr] = 'Y';
                    break;
                case 'y':
                    temp[iCtr] = 'y';
                    break;
                case 'Z':
                    temp[iCtr] = 'X';
                    break;
                case 'z':
                    temp[iCtr] = 'x';
                    break;
                case ' ':
                    temp[iCtr] = ' ';
                    break;
                case '!':
                    temp[iCtr] = '!';
                    break;
                case '.':
                    temp[iCtr] = '.';
                    break;
                case ',':
                    temp[iCtr] = ',';
                    break;
                case '\'':
                    temp[iCtr] = '\'';
                    break;
                case '\n':
                    temp[iCtr] = '<br>';
                    break;
                case '"':
                	temp[iCtr] = '"';
                	break;
               	case '-':
               		temp[iCtr] = '-';
               		break;
               	case '?':
               		temp[iCtr] = '?';
               		break;
		}
	}
	return temp;
};

$(document).ready(function(){
	$("#encode").click(function(){	
		inputString = document.getElementById("inputArea").value;
		$("#outputArea").append(encode(inputString));
	});

	$("#decode").click(function(){
		inputString = document.getElementById("inputArea").value;
		$("#outputArea").append(decode(inputString));
	});

	$("#refresh").click(function(){
		location.reload();
	});
});