//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId); //false

 const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
 //   console.log("Hello world");
}

//console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// stack (primitive) , Heap (Non primitive)
 let myName = "Saurabh Pandey";

 let anotherName =myName
     anotherName ="Roshan Pandey"

  console.log(myName)
  console.log(anotherName)

  let userOne = {
    email : "saurabh@gmail.com",
    upi : "saurabh@sbi"
  }
 
  let userTwo = userOne

  console.log(userOne.email)  //saurabh@gmail.com
  console.log(userTwo.email)  //saurabh@gmail.com


userTwo.email ="rosan@gmail.com"
 console.log(userOne.email) //rosan@gmail.com
 console.log(userTwo.email) //rosan@gmail.com


