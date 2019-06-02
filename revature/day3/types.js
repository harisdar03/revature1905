'use strict';

console.log('Hello from inside types.js');

//types! in JS variables do not have type.
//we say that they are "dynamicallyy typed"

//the types in JavaScript:

    var x; //the type of x is undefined

    x=undefined;
    x={}.name; //undefined because of unitialized variable or property
    x="abc"[5]; //undefined because we are trying to access an index that doesnt exist

//many programming languages have 'objects'
//java is an object-oriented language

//JavaScript is Object-based. the difference is that javascript does not have classes

//objects in JavaScript are defeined with {} and can have properties 
//such as varibales atached to the object and methods such as functions attached to the object)

//type number
x=1;
x=3.14;
x=-70;
x=Infinity;
x= -Infinity;
x=4/0; //infinity
x=5/'abc';//NaN (Not a Number) NaN is of type number still
x=NaN+5;//any arithmetic with NaN results in NaN

//type string

x='abc';
x="abc"; //single or double quotes make no difference
//there are no chars in JS, only strings

x="abc"[1];//this is a string even if it is a single char

//type boolean
//a boolean is either true or false:
x=true;
x=false;

//type object

x={}; //empty object
x={
    name: 'haris',
    height: 6
};
//acces the prperties of an objet with [] or '.'
console.log(x);
console.log(x.name);
console.log(x['height']);
//we can also add additional properties, or edit properties
x.lastname='dar';
x.height=6.08;

//functions are still of type objects, though typeof will still return function
let doesStringHaveA = function(s) {return s.includes("a")} ;//returns a boolean

//something to know: everything in js is an object

//type null
x=null;
//different from undefined. undefined has to do with non-assignment
//if i didnt have a last name:
//x.lastname=null;


//in review, js has only these types:
//number,string,boolean,object
//undefined,null

typeof(null); //returns object-though it really shouldn't
