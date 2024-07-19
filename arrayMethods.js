// Create a detailed note and try out at least one example for each of these array methods (create one JS file named arrayMethods).


//1) concat()
//--> Method concatenates (joins) two or more arrays.
//--> Method returns a new array, containing the joined arrays.
//--> Method does not change the existing arrays.

const arr1 = ["Cecilie", "Lone"];
const arr2 = [1, 2, 3];
const arr3 = ["Robin"];
let result = arr1.concat(arr2, arr3);
console.log(result);


/*
2) every()
--> Method executes a function for each array element.
--> Method returns true if the function returns true for all elements.
--> Method returns false if the function returns false for one element.
--> Method does not execute the function for empty elements.
--> Method does not change the original array
*/
let ages = [32, 33, 16, 40];

result = ages.every((age)=>{
  return age > 18
});
console.log(result);



//3) fill()
//--> Method fills specified elements in an array with a value.
//--> Method overwrites the original array.
//--> Start and end position can be specified. If not, all elements will be filled.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 2, 4);
console.log(fruits);


/*
4) find()
--> Method returns the value of the first element that passes a test.
--> Method executes a function for each array element.
--> Method returns undefined if no elements are found.
--> Method does not execute the function for empty elements.
--> Method does not change the original array.
*/
ages = [3, 10, 18, 20, 34];

result = ages.find((age)=>{
  return age > 18
});
console.log(result);


/*
5) findIndex()
--> Method executes a function for each array element.
--> Method returns the index (position) of the first element that passes a test.
--> Method returns -1 if no match is found.
--> Method does not execute the function for empty array elements.
--> Method does not change the original array.
*/
ages = [3, 10, 18, 20, 34];

result = ages.findIndex((age)=>{
  return age > 18
});
console.log(result);



//6) The flat() method concatenates sub-array elements.
const myArr = [[1,2],[3,4],[5,6]];
let newArr = myArr.flat();
console.log(newArr);



//7) includes()
//--> Method returns true if an array contains a specified value.
//--> Method returns false if the value is not found.
//--> Method is case sensitive.

fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.includes("Banana", 3);//starting the search from position 3
console.log(result);


/*
8) indexOf()
--> Method returns the first index (position) of a specified value.
--> Method returns -1 if the value is not found.
--> Method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
--> By default the search starts at the first element and ends at the last.
--> Negative start values counts from the last element (but still searches from left to right).
*/
fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3);
console.log(index);



//9) join()
//--> Method returns an array as a string.
//--> Method does not change the original array.
//--> Any separator can be specified. The default is comma (,).
fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);


/*
10) lastIndexOf()
--> Method returns the last index (position) of a specified value.
--> Method returns -1 if the value is not found.
--> Method starts at a specified index and searches from right to left (from the given postion to the beginning of the array).
--> By defalt the search starts at the last element and ends at the first.
--> Negative start values counts from the last element (but still searches from right to left).
*/
fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
index = fruits.lastIndexOf("Apple", 4);
console.log(index);



//11) pop()
//--> Method removes (pops) the last element of an array.
//--> Method changes the original array.
//--> Method returns the removed element.
fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.pop();
console.log(result);



//12) push()
//--> Method adds new items to the end of an array.
//--> Method changes the length of the array.
//--> Method returns the new length.
fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.push("Kiwi", "Lemon");
console.log(fruits);
console.log(result);



//13) reverse()
//--> Method reverses the order of the elements in an array.
//--> Method overwrites the original array.
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);



//14) unshift()
//--> Method adds new elements to the beginning of an array.
//--> Method overwrites the original array.
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);



//15) shift()
//--> Method removes the first item of an array.
//--> Method changes the original array.
//--> Method returns the shifted element.
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);



//16) slice()
//--> Method returns selected elements in an array, as a new array.
//--> Method selects from a given start, up to a (not inclusive) given end.
//--> Method does not change the original array.
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);


/*
17) some()
--> Method checks if any array elements pass a test (provided as a callback function).
--> Method executes the callback function once for each array element.
--> Method returns true (and stops) if the function returns true for one of the array elements.
--> Method returns false if the function returns false for all of the array elements.
--> Method does not execute the function for empty array elements.
--> Method does not change the original array.
*/
ages = [3, 10, 18, 20];

result = ages.some((age)=>{
  return age > 18;
});
console.log(result);



//18) sort()
//--> Method sorts the elements of an array.
//--> Method sorts the elements as strings in alphabetical and ascending order.
//--> Method overwrites the original array.
const points = [40, 100, 1, 5, 25, 10];

points.sort((a, b)=>{
  return a-b
});
console.log(points[0]);



//19) splice()
//--> Method adds and/or removes array elements.
//--> Method overwrites the original array.
fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);



//20) toString()
//--> Method returns a string with array values separated by commas.
//--> Method does not change the original array.
fruits = ["Banana", "Orange", "Apple", "Mango"];
text = fruits.toString();
console.log(text);



//21) filter()
//--> Method creates a new array filled with elements that pass a test provided by a function.
//--> Method does not execute the function for empty elements.
//--> Method does not change the original array.
ages = [32, 33, 16, 40];
result = ages.filter((age)=>{
  return age >= 18;
});
console.log(result);


/*
22) reduce()
--> Method executes a reducer function for array element.
--> Method returns a single value: the function's accumulated result.
--> Method does not execute the function for empty array elements.
--> Method does not change the original array.
*/
let numbers = [175, 50, 25];

result = numbers.reduce((total, num)=> {
  return total -= num
});
console.log(result);



//23) map()
//--> creates a new array from calling a function for every array element.
//--> does not execute the function for empty elements.
//--> does not change the original array.
numbers = [65, 44, 12, 4];

newArr = numbers.map((num)=>{
  return num * 10
});
console.log(newArr);



//24) forEach()
//--> Method calls a function for each element in an array.
//--> Method is not executed for empty elements.
let sum = 0;
numbers = [65, 44, 12, 4];

result = numbers.forEach((item)=>{
  sum += item;
});
console.log(sum);