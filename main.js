// reset js
'use strict';

console.log("Ciao Mondo!")

// itero i numeri da 1 a 100
for(let i = 1; i <= 100; i++) {

    // Se il numero è divisibile per 3 stampare "Fizz"
    if (i % 3 === 0){
        console.log("Fizz")
      // Se il numero è divisibile per 5 stampare "Buzz"   
    }else if(i % 5 === 0){
        console.log("Buzz")
        // "FizzBuzz" viene stampato al posto dei multipli sia di 3 che di 5.
    }else if(i % 3 === 0 || i % 5 === 0) {
        console.log("FizzBuzz")
    }else {
        console.log(i);
    }
}
