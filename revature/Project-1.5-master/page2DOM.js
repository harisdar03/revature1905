'use strict';

let clickerText = document.getElementById("BtnTxt");
let clickerBtn = document.getElementById("clickableBtn");
let otherText = document.getElementById("otherTxt");

//https://stackoverflow.com/questions/18536726/javascript-to-display-the-current-date-and-time/26814307
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

let counter = 0;
clickerBtn.addEventListener("click", () =>{
    counter = counter + 1;
    clickerText.innerText = `Button clicked: ${counter} times`;
    //V also from StackOverflow
    document.getElementById('otherTxt').innerHTML = n + ' ' + time;
});