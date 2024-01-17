/************** Q No 01(Code a statement that creates a new Date object and assigns it to
dObj, which hasn't been declared beforehand.)**************/
var date = new Date();
var dObj = date;
console.log("Ans 01 : " + dObj);

/************** Q No 02( Code a statement that creates a new Date object, converts it to a 
 string, and assigns the string to dStr, which hasn't been declared 
 beforehand.)**************/
var date1 = new Date();
// console.log(typeof date1);
var dStr = date1.toString();
console.log("Ans 02 : " + typeof dStr);

/************** Q No 03( Code a statement that extracts the day of the week from a Date 
object represented by d and assigns it to day, which hasn't been 
declared beforehand. )**************/
var d = new Date();
var weekArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayIndex = d.getDay();
// console.log(dayIndex);
var day = weekArr[dayIndex];
console.log("Ans 03 : " + day);

/************** Q No 04(The day has been extracted from the Date object and assigned to 
 d. The names of the days of the week have been assigned to the 
 array dayNames. Alert the current day with array index.  )**************/
console.log("Ans 04 : " + "Index is = " + dayIndex + ", " + "Day is = " + day);

/************** Q No 05(Extract all parts of the Date and Time and assign it to the variable 
which has not been declared beforehand.  )**************/
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var year = d.getFullYear();
// console.log(year);
var month = months[d.getMonth()];
// console.log(month);
var date = d.getDate();
// console.log(date);
// console.log(day);
var time = d.getTime();
// console.log(time);
var hours = d.getHours();
// console.log(hours);
var minutes = d.getMinutes();
// console.log(minutes);
var sec = d.getSeconds();
// console.log(sec);
console.log(
  `Ans 05 : Year : ${year}, Month : ${month}, Date : ${date}, Day : ${day}, Hours : ${hours}, Minutes : ${minutes}, Seconds : ${sec} `
);
// console.log("Time is : " + hours + ":" + minutes + ":" + sec);

/************** Q No 06( Code a statement that creates a Date object for the last day of the 
last month of 2020 and assigns it to later, which hasn't been 
declared beforehand.)**************/
var date2020 = new Date("12,31,2020");
// console.log(date2020);
var _12_31_2020 = date2020;
console.log(`Ans 06 : ${_12_31_2020}`);
// console.log(_12_31_2020.getDay());
// console.log(weekArr[_12_31_2020.getDay()]);

/************** Q No 07( Create a Date object for the second day of the second month of 
 1992 and assign it to a variable that hasn't been declared 
 beforehand. )**************/
var date1992 = new Date("02,02,1992");
var _02_02_1992 = date1992;
console.log(`Ans 07 : ${_02_02_1992}`);

/************** Q No 08( Code a single statement that displays in an alert the milliseconds 
that elapsed between the reference date and the beginning of 
1980. )**************/
console.log(new Date().getTime());
console.log(new Date().getTime("00,01,1980"));
console.log(new Date().getTime("1980,01,01"));

/************** Q No 09(How do you change the year of a date in JavaScript?  )**************/
var d1 = new Date();
console.log(`Ans 09 :Before Change Year ${d1}`);
d1.setFullYear("2000");
console.log(`Ans 09 : After Change Year ${d1}`);

/************** Q No 10(Write a JavaScript function to change the month of a given 
date to January.  )**************/
d1.setMonth("09");
console.log(`Ans 10 : After Change Month ${d1}`);

/************** Functions **************/
console.log("*****************Functions*******************");
/************** Q No 01(Code the first line of a function displayAlert)**************/
function displayAlert() {}
/************** Q No 02(Code a function named askName that prompts the user to "Enter 
name" and assigns the answer to userName, which hasn't been 
declared beforehand. )**************/
function askName() {
  var userName = prompt("Enter Name", "Bilal");
  console.log(`Ans 02 : ${userName}`);
}
askName();
/************** Q No 03(Code a function that calls 2 other functions.)**************/
function handleOne() {
  handleTwo();
  handleThree();
}
handleOne();
function handleTwo() {
  console.log(`Ans 03 : Three`);
}
function handleThree() {
  console.log(`Ans 03 : Four`);
}
// handleFour();
// function handleFour() {
//   console.log("Four");
// }

// var n = 5;
// console.log(n);
// function nInc() {
//   n = 6;
//   console.log(n);
// }
// console.log(n);
// nInc();

/************** Q No 04(Code a function that displays a prompt, "Enter name" and then 
displays the name in an alert. Call the function.)**************/
function disName() {
  var name = prompt("Enter Name");
  alert(name);
  console.log(`Ans 04 : ${name}`);
}
disName();
/************** Q No 05(Code the first line of a function named concat that has 3 
parameters, the first three letters of the alphabet. Call that takes 
a variable, a string, and a number as arguments.)**************/
var bool = true;
function handleConcate(a, b, c) {
  console.log(`Ans 05 : ${a},${b},${c}`);
}
handleConcate(bool, "Bilal", 28);
/************** Q No 06(Code a function that has 2 parameters. Concatenate them and 
assign the result to a variable that hasn't been declared 
beforehand. )**************/
function handleTwoPara(a, b) {
  var ab = a + b;
  return ab;
}
var ab = handleTwoPara("Muhammad ", "Bilal");
console.log(`Ans 06 : ${ab}`);
/************** Q No 07(Code a function that has three parameters. Multiply them and 
 assign them to a variable that hasn't been declared yet. )**************/
function handleThreePara(a, b, c) {
  var abc = a * b * c;
  return abc;
}
var abc = handleThreePara(2, 3, 4);
console.log(`Ans 07 : ${abc}`);
/************** Q No 08(Write a JavaScript function that takes an array of numbers as 
input and returns the average of those numbers. )**************/
function handleAvg(numArr) {
  // console.log(numArr);
  var avg = 0;
  for (i = 0; i < numArr.length; i++) {
    avg = avg + numArr[i];
  }
  // console.log(avg);
  avg = avg / numArr.length;
  return avg.toFixed(3);
}
console.log(`Ans 08 : Avg is ${handleAvg([2, 4, 6, 8, 10, 20])}`);

/************** Q No 09(Write a JavaScript function that takes two parameters and returns 
their sum. )**************/

function handleSum(num1, num2) {
  return num1 + num2;
}
console.log(`Ans 09 : sum of two Parameters ${handleSum(5, 5)}`);

/************** Q No 15(Write a function which tells the presense of (word) in an 
array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'] 
result should be in true or false )**************/

function handleCheckVal(name) {
  var bool = false;
  array = ["zaid", "haris", "raza", "abubakar", "hassan", "hussain", "fatima"];
  for (i = 0; i < array.length - 1; i++) {
    // console.log(array[i]);
    if (name === array[i]) {
      bool = true;
      console.log(name);
      break;
    }
  }
  return bool;
}
console.log(`Ans 15 : ${handleCheckVal("raza")}`);
console.log(`Ans 15 : ${handleCheckVal("bilal")}`);
console.log(`Ans 15 : ${handleCheckVal("hussain")}`);

/************** Q No 17(write a function which reverse array = ['a','b','c','d','e'] 
Hint: arr.reverse() )**************/
array = ["a", "b", "c", "d", "e"];
function handleRev(arr) {
  return arr.reverse();
}
var revArr = handleRev(array);
console.log(`Ans 17 : ${revArr}`);

// /************** Q No 18(Write a JavaScript function that reverses a number. )**************/
function handleRevNum(num) {
  num = num.toString().split("").reverse().join("");
  return num;
}
console.log(`Ans 18 : ${handleRevNum(32243)}`);

// Q No 19(Write a JavaScript function that checks whether a passed string is a palindrome or not)
function handlePalindrom() {
  var name = prompt("Enter Word to Chek Palindrome");
  name = name.split("");
  console.log(name);
  var name1 = [];
  var a = 0;
  for (i = name.length; i > 0; i--) {
    name1[a] = name[i - 1];
    a++;
    // name1.push(name[i - 1]);
  }
  console.log(name1);
  name = name.join("");
  console.log(name);
  name1 = name1.join("");
  console.log(name1);
  if (name === name1) {
    console.log("Ans 19 : Word is Palindrom");
  } else {
    console.log("Ans 19 : Word is Not Palindrom");
  }
}
handlePalindrom();

// Q No 20(Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word into upper
// case.)

function handleCaps(word) {
  word = word.split(" ");
  console.log(word);
  for (i = 0; i < word.length; i++) {
    // word[i] = word[i][0].toUpperCase() + word[i].slice(1);
    word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
    // word[i] = word[i].charAt(0).toUpperCase() + word[i].split(1);
  }
  console.log(word);
  console.log(`Ans 20 : ${word.join(" ")}`);
}
handleCaps("the quick brown fox");

// Q No 21(Write a JavaScript function that takes an array of numbers
// and finds the lowest and greatest numbers, respectively.)

function handleMAxMin(arr) {
  console.log(...arr);
  console.log(`Ans 21 : Max Number ${Math.max(...arr)}`);
  console.log(`Ans 21 : Min Number ${Math.min(...arr)}`);
}
handleMAxMin([33, 4, 5, 7, 8]);
