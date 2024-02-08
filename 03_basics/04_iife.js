// Immediately Invoked Function Expressions (IIFE)


(function code (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Saurabh');
/* +++++++ Note +++++

if we will not add semicolon(;) at end of call function (exp. ('Saurabh'))
further function will not execute see below example and error after run 

*/


(function employee () {
 console.log("salary credited")
})()

