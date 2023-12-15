//var >> it's allow change value any time into function or out
//let >> it's allow change value just into function but not out
//const >> it's prevent change value any time
var one_val = 24;
one_val++; //or --
one_val += 3; //one_val = one_val + 4; or -= or *= or /=
var str1 = " and "
var FCC = 'freeCodeCamp'; // better practis use uppercase in const
let fact = "this website \"need\" to money"; // the \" ... \" to put "" into string
fact += "is awesome! but 'not' good." + str1; //use += with let variable
fact += FCC;
console.log(FCC, "\n", fact, "\n", one_val, '\n');
let lastNameLength = 0;
let lastName = "Lovelace";
lastNameLength = lastName.length; //it mean that lastNameLength = 8;
const firstName = "Charles";
const firstLetter = firstName[2]; // it's equal: firstLetter = "a";
lastName = "Lovelacer";
const lastLetterOfLastName = lastName[lastName.length - 1]; //it's equal: lastLetterOfLastName = "r";
const array = [50, 60, 70];
console.log(array[0], '\n'); //50
const data = array[2]; //data = 70
array[1] = 66; //array = [50, 66, 70]

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr[3]; // [[10, 11, 12], 13, 14]
const nestedSubarray = arr[3][0]; // [10, 11, 12]
const element = arr[3][0][1]; // 11
let myData = arr[2][1]; // 8
myData = arr[3][2]; // 14
array.push(56, 5678, ["go", 7], 0, 77777);
console.log('\n', myData, "....\n", array);
var removedFromMyArray = array.pop();
console.log("\n\narray after popped: ", array);
removeShift = array.shift();
console.log("\nshifted: ", removeShift, "\n", array);
myArray2 = [["John", 23], ["dog", 3]];
myArray2.shift();
myArray2.unshift(["Paul", 35]);
console.log("\nmyArray2 after del first ele than add instad it: ", myArray2);