//var >> it's allow change value any time into function or out
//let >> it's allow change value just into function but not out
//const >> it's prevent change value any time
var one_val = 24;
one_val++; //or --
one_val += 3; //one_val = one_val + 3; or -= or *= or /=
var str1 = " and "
const FCC = 'freeCodeCamp'; // better practis use uppercase in const
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

const arr0 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const subarray = arr0[3]; // [[10, 11, 12], 13, 14]
const nestedSubarray = arr0[3][0]; // [10, 11, 12]
const element = arr0[3][0][1]; // 11
let myData = arr0[2][1]; // 8
myData = arr0[3][2]; // 14
array.push(56, 5678, ["go", 7], 0, 77777);
console.log('\n', myData, "....\n", array);
var removedFromMyArray = array.pop();
console.log("\n\narray after popped: ", array);
removeShift = array.shift();
console.log("\nshifted: ", removeShift, "\n", array);
myArray2 = [["John", 23], ["dog", 3]];
myArray2.shift(); //del first element from array
myArray2.unshift(["Paul", 35]); //push first element in array
console.log("\nmyArray2 after del first ele than add instad it: ", myArray2);
// myArray2 = [["Paul", 35], ["dog", 3]]; 

//Functions:
function functionWithArgs(x, y) {
  console.log(x + y);
}
functionWithArgs(3, 10); //calling
function timesFive(num) {
  return num * 5;
}
let answer = timesFive(5);
console.log("\n", answer, "\n");

//queue
function nextInLine(arr, item) {
  arr.push(item);
  removed = arr.shift();
  return removed;
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + testArr);
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//comparison
// 1 == 1 true   4 == '4' true   6 == 7 false
// 3 === 3 true   3 === '3' // false
// 1 != 2 true    1 != "1" false   1 != '1' false   1 != true >false   0 != false >false
// 3 !== 3 false   3 !== '3' true   4 !== 3 true
// 5 > 3 true   7 > '3' true   2 > 3 false   '1' > 9 false
// 6 >= 6 true   7 >= '3' true   2 >= 3 false   '7' >= 9 false

//if
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}
test(true);
console.log(test(false));
let num = 0;
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
//or >>>
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";

let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}
console.log("\n" + golfScore(5, 4));
//or
function golfScore2(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
      ? names[1]
      : strokes === par - 1
        ? names[2]
        : strokes === par
          ? names[3]
          : strokes === par + 1
            ? names[4]
            : strokes === par + 2
              ? names[5]
              : names[6];
}
console.log(golfScore2(34, 8));

function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
isLess(10, 15);
//or
function isLess2(a, b) {
  return a < b;
}
isLess2(10, 15);

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined; //exit from function -error-
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);

//switch
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
caseInSwitch(3);
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
switchOfStuff("z");
let result0 = "";
function switchOfMulti(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      result0 = "1, 2, or 3";
      break;
    case 4:
      result0 = "4 alone";
  }
}
switchOfMulti(2);

//objects
const cat = {
  "name": "Whiskers",
  "second name": "oxy",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"],
  5: "five",
  model: "focus"
};
const prop1val = cat[5]; //propval1 == five
const prop2val = cat.name; //propval2 == Whiskers
//or
const prop3val = cat["model"]; //propval3 == 4
const prop4val = cat["second name"] //if property contain space we should use []
//with value
const prop = "tails";
const prop5val = cat[prop];
console.log("\n", prop5val);
cat.name = "tom"; //to update property or use: cat["name"] = "tom";
cat.color = "white"; //to add property or use: cat["color"] = "white";
delete cat.tails; //to delete property
//for check property eather found or not
function checkForProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}
/*or
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
*/
//checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
//checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false

//object into array
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

//nested object
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; //secrets
ourStorage.desk.drawer; //stapler
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

//nested arrays
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; //fluffy
ourPets[1].names[0]; //spot

//practic
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "") {
    if (records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//while loop
const myArray10 = [];
let i=5
while (i>=0) {
  myArray10.push(i);
  i--;
}
console.log("\n", myArray10);
//for loop
const myArray11 = [];
for (let i = 0; i < 10; i += 2) {
  myArray11.push(i);
}
console.log('\n',myArray11); //[0, 4, 6, 8]
let myArr=[43,6,3,6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log('\n',total);

const arr13 = [
  [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr13.length; i++) {
  for (let j = 0; j < arr13[i].length; j++) {
    console.log(arr13[i][j]);
  }
}
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product=product*arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//do...while
const myArray14 = [];
let ii = 10;
do {
  myArray14.push(ii);
  ii++;
} while (ii < 5);

//multiply element's array
/*
sum([1], 0) should equal 0.
sum([2, 3, 4], 1) should equal 2.
sum([2, 3, 4, 5], 3) should equal 9.
*/
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
//or
function multiply1(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply1(arr, n - 1) * arr[n - 1];
  }
}
//for sum
function sum1(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum1(arr, n - 1) + arr[n - 1];
  }
}

//pracris
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) { //.hasOwnProperty() method (checks if there’s a given property and returns a boolean)
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
lookUpProfile("Akira", "likes");

//generates a random decimal number between 0 (inclusive) and 1 (exclusive-not)
function randomFraction() {
  return Math.random();
}
//random whole number less than 9
function randomWholeNum() {
  return Math.floor(Math.random() * 10); //using 10 becuase This process will give you a random whole number in the range from 0 to 9
}
//that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

//convert str to int
const a = parseInt("007");
//convert binary to int
const b = parseInt("11", 2); //b= 3
function convertToInteger(str) {
  return parseInt(str, 2)
}
convertToInteger("10011");

//ternary operator
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}//or
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
function checkSign(num) {
  return num > 0 ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);

//Recursion
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); //[1, 2, 3, 4, 5]
function countdown(n){
  if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
  console.log(countdown(5)); //[5, 4, 3, 2, 1]

  function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
      return [];
    } else {
      const numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  rangeOfNumbers(3, 7); //[3,4,5,6,7]