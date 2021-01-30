// Regex: using the test method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Regex: match literal strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// Match a literal string with different possiblities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);

// ignore case while matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

// Regex: Extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex);

//Regex: find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; 
let result = twinkleStar.match(starRegex);

//Regex: match anything with wildcard period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);