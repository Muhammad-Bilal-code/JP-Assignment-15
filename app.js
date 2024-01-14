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
console.log(`Ans 09 : After Change Year${d1}`);

/************** Q No 10(Write a JavaScript function to change the month of a given 
date to January.  )**************/
d1.setMonth("09");
console.log(`Ans 10 : ${d1}`);
