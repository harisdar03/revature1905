'use strict';

function convertToBool(x){
    let bool= Boolean(x);
    console.log(`${x} as boolean: ${bool}`);

}

//in practice, we'll see this in if statements

convertToBool(3===2);
convertToBool(null);
convertToBool(undefined);
convertToBool(30);
convertToBool(-2);
convertToBool("");
convertToBool("haris");
convertToBool("      ");
convertToBool(Infinity/-Infinity);
convertToBool({});
convertToBool([]);
convertToBool(NaN);
convertToBool({name:"myObj"});


//falsy values:
//null, undefined, "", NaN,0, -0(dont use this)

//everything else is truthy

//in practice
let s = "abc";

if (s){
    console.log(`s has length: ${s.length}`);
} else {
    console.log("s was empty");
}

if (3===2){
    console.log("true");
} else{
    console.log("false");
}


