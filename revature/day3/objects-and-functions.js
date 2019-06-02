'use strict';

//objects can have functions as properties

let obj= {
    name: 'Haris',
    sayName: function(){
        //inside a method, "this" refers to the object
        console.log(this);
        console.log(this.name);
    }
}

//obj.name;
obj.sayName();

//a callback function:
// a function that is passed into another function as an argument
//the callback is called when the outer function returns

function add(a,b, callback){
    let result=a+b;
    callback(result);
}

add(2,3, console.log);

//we use callback functions so we can inject diifeent behaviour 
//and apply that behaviour to the result

//there are multiple ways to define functions inline to
//facilitate using callback functions

add(3,4,function(x){console.log(x+10)});

//another way to write the same thing with an "arrow function"

add(3,4,(x)=>{console.log(x+10)});

//when we're working with a single argument and expression:

add(3,4,x=>console.log(x+10));

//we can actually do this
(function(x){console.log(x+10)})(22);
