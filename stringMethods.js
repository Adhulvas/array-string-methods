// Create a detailed note and try out at least one example for each of these string methods (create one JS file named stringMethods)


//1) concat()
//--> Method joins two or more strings.
//--> Method does not change the existing strings.
//--> Method returns a new string.
let text1 = "My";
let text2 = "name is";
let text3 = "Adhulvas";
result = text1.concat(" ", text2, " ", text3);
console.log(result);



//2) includes()
//--> Method returns true if a string contains a specified string.
//--> Otherwise it returns false.
//--> Method is case sensitive.
text = "Hello world, welcome to the universe.";
result = text.includes("world", 12);
console.log(result);



//3) indexOf()
//--> Method returns the position of the first occurrence of a value in a string.
//--> Method returns -1 if the value is not found.
//--> Method is case sensitive.
text = "Hello world, welcome to the universe.";
result = text.indexOf("Welcome");
console.log(result);


/*
4) lastIndexOf()
--> Method returns the index (position) of the last occurrence of a specified value in a string.
--> Method searches the string from the end to the beginning.
--> Method returns the index from the beginning (position 0).
--> Method returns -1 if the value is not found.
--> Method is case sensitive.
*/
text = "Hello planet earth, you are a great planet.";
result = text.lastIndexOf("planet");
console.log(result);



//5) padEnd()
//--> Method pads a string at the end.
//--> Method pads a string with another string (multiple times) until it reaches a given length.
text = "5";
let padded = text.padEnd(4, "0");
console.log(padded);



//6) padStart()
//--> Method pads a string from the start.
//--> Method pads a string with another string (multiple times) until it reaches a given length.
text = "5";
padded = text.padStart(4, "x");
console.log(padded);



//7) repeat()
//--> Method returns a string with a number of copies of a string.
//--> Method returns a new string.
//--> Method does not change the original string.
text = "Adhulvas";
result = text.repeat(3);
console.log(result);



//8) replace()
//--> Method searches a string for a value or a regular expression.
//--> Method returns a new string with the value(s) replaced.
//--> Method does not change the original string.
text = "Mr Blue has a blue house and a blue car";
result = text.replace(/blue/g, "red");
console.log(result);


/*
9) search()
--> Method matches a string against a regular expression **
--> Method returns the index (position) of the first match.
--> Method returns -1 if no match is found.
--> Method is case sensitive.
*/
text = "Mr. Blue has a blue house";
let position = text.search("blue");
console.log(position);


/*
10) slice()
--> Method extracts a part of a string.
--> Method returns the extracted part in a new string.
--> Method does not change the original string.
--> The start and end parameters specifies the part of the string to extract.
--> The first position is 0, the second is 1, ...
--> A negative number selects from the end of the string.
*/
text = "Hello world!";
result = text.slice(3, 8);
console.log(result);


/*
11) split()
--> Method splits a string into an array of substrings.
--> Method returns the new array.
--> Method does not change the original string.
--> If (" ") is used as separator, the string is split between words.
*/
text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);