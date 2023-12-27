// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true
/* The reason is that an equality check == and comparision > <= 
 <= work differently
 comparisions convert null to a number treating as 0
 That's why null >=0 is true and null == 0 is false. */


// console.log(undefined == 0); //false
// console.log(undefined > 0);  //false
// console.log(undefined < 0);  //false

// ===  -->stick equality (here conversion is not happen)

 console.log("2" === 2); //false