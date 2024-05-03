//scope
//let -- local
//const -- local
//var -- global

//the things imported in curly brackets , make sure the same name should be exported 
//Typescript variable has 3 scopes: Global Function and local
//var = you can create global and func variable
//let & const = all 3 

import {a} from "./first.js"
import {b as myNumber} from "./second.js"


import {z} from "./first.js"
console.log(z)

// if(true)
//     {
//     let myName ="Ahmed";
//     var age = 25;
//     const city ="Cairo";
//     }
    
//     console.log(age);

// let greeting ="hello"
// function hello()
// {
//     console.log(greeting)
// }
  
//------------------------------------------------------------------------------------


// let myAge: number | boolean | undefined;
// myAge = 26;
// myAge = true;

// myAge =  undefined



// let phoneNumber : number|string|boolean;

// phoneNumber = 923259098234
// phoneNumber = "+923259098234"
// phoneNumber = "0325-9098234"

// console.log(phoneNumber)

 let myname: string | null;

// myname = null;
// myname = "zia";

// console.log(myname);

//--------------------------------------------------------------------

//union laterals

let myAge: number | string;
myAge = "26";
// let subAge =myAge / 2

if(typeof myAge === "string")
    {
        myAge.toLowerCase()
    }

    if(typeof myAge === "number")
        {
            let subAge =myAge / 2
        }
    
        console.log(myAge)
//---------------------------------------------------------------------


