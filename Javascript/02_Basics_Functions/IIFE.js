// Immediately Invoked Function Expressions (IIFE)

/*
IIFE is a function that is executed immediately.
Sometimes the pollution from global scope creates problems,
hence to remove it we use IIFE.
*/


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// end the IIFE with a semi-colon so it knows where to end the context of that function.

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Ram")

// Argument given in the second parenthesis