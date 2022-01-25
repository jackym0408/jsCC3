// MEDIUM: Write a function that would allow you to do this:

// var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2):
//   // prints "Each person gets 4.00 slices of pizza"

// console.log(sharePizza(3)); 

//   // prints "Each person gets 2.67 slices of pizza"


function cutPizzaSlices(pizza){ 

    return function something(slices){ 
        return (pizza / slices)

    }
    
}

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
