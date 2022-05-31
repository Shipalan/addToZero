// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]


// Write your solution below:

let value = false;                                 // setting the "value" variable to false

for (let i = 0; i < array.length; i++){            // Starting with the first number in the array
    for (let j = 0; j <array.length; j++){         // looping through the array to check each number against "i" then "i" will go to next number
        if (i !== j){                              // making sure they dont test the same number
            if (array[i] + array[j] === 0){        // checking if they both equal to 0
                value = true                       // if the two numbers are equal to zero set value to true
            }
        }
    }
}
console.log(value);