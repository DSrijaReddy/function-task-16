// 1.	Write an arrow function that takes two 
// parameters, a and b, and returns their sum.

let sum=(a,b)=>a+b;
console.log(sum(3,5));

// 2.	Create an arrow function that takes a single parameter
//  name and returns a greeting message: “Hello, {name}!”

let greet=(name)=>`Hello,${name}!`;
console.log(greet("sreeja"));

// 3.	Write an arrow function that checks if a number
//  is even and returns true if it is, or false otherwise.

let isEven = (num) => num % 2 === 0;
console.log(isEven(4));

// 4.	Write an arrow function that accepts a number and
// returns true if the number is greater than 10, or false otherwise.

let isgreaternumber = (num) => num > 10;
console.log(isgreaternumber(14));


// 5.	Create an arrow function that takes two strings, compares their lengths,
//  and returns the longer string. If both have the same length, return “Equal length.”


let twostrings = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1;
    } else if (str1.length < str2.length) {
        return str2;
    } else {
        return "Equal length";
    }
};

console.log(twostrings("Hello","srija"));