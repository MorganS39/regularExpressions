// Regex: using the test method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Regex: match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);