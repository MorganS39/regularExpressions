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

// match single characters with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex);

// match letters of the alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; 
let result = quoteSample.match(alphabetRegex); 

// match numbers and letters of the alphabet
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 

// Match single characters not specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; 
let result = quoteSample.match(myRegex); 

// Match characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);

// Match characters that occur zero or more times
let chewieRegex = /Aa*/;

let result = chewieQuote.match(chewieRegex);

// Find characters with lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);