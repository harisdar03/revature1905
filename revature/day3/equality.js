'use strict';

console.log("Hello from inside equality.js");

//there are two types of equals in js:
//double equals: ==
    //compares value without comparing type
//triple equals : ===
    //compares value and type

    //same as let compare=function...

function compare(a, b){
    //new in ES6 is String interpolation
    //uses backticks '`' ( key under escape button) with ${}
    //this can display variables/js inside of strings
    //"c"+"a"+"b"
    //use triple equals, double equals leads to false positives
    console.log(`a: ${a}, b: ${b}`);
    console.log(`a==b: ${a==b}`);
    console.log(`a===b: ${a===b}`);
}
    compare(45,"blue");
    compare(45,"45");
    compare("",0);
    compare(1,1.0);
    compare(0,{});
    compare(null,{});