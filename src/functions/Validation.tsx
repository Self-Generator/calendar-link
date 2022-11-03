const date = new Date();
const year = date.getFullYear();

// Date Validation
var Year = year.toString();
const month = date.getMonth() + 1;
var Month = month.toString();
const day = date.getDate();
var Day
if (day < 10) {
    Day = '0' + day;
}

//concat
export const DATE = Year + Month + Day;
// console.log(DATE);



// Time Validation
const hour = date.getHours();
var Hour = hour.toString();
const minute = date.getMinutes();
var Minute = minute.toString();

//concat
export const TIME = Hour + Minute + '00';
// console.log(TIME);
