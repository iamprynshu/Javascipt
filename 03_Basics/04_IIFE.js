// Immediately Invoked Function Expresssions (IIFE)

//Named IIFE
(function chai(){ //We have used IIFE so that function will execute immediately and to global scope variables do not pollute the function.
    console.log("DB Connected");
})(); // Semicolon is needed to execute two IIFE in one File.

// Arrow Function IIFE or Unnamed IIFE
((name) =>{ //Parameter Passing
    console.log(`DB Two Connected ${name}.`) //String Interpolation
})("Priyanshu"); //Argument Passing