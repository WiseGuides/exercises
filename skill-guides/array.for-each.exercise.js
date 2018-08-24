/*** Exercise 1a */
// 1. Create an array, temperatures, with 10 different temperatures
let temperatures;
temperatures = [93,87,84,81,88,91,93,86,101,99];
// module.exports.temperatures = temperatures;

// 2. Loop over the temperatures array using a named regular function that adds all the temperatures together into provided tempTotalNRF
let tempTotalNRF = 0;
function sumTemps(temp) {
  tempTotalNRF += temp;
}
temperatures.forEach(sumTemps);



/*** Exercise 1b */
// 1. Loop over the temperatures array using a anonymous regular function that adds all the temperatures together into provided tempTotalARF
let tempTotalARF = 0;
temperatures.forEach( function(temp) {
  tempTotalARF += temp;
})

/*** Exercise 1c */
// 1. Loop over the temperatures array using a named arrow function that adds all the temperatures together into provided tempTotalNAF
let tempTotalNAF = 0;
let nafAdder = (temp) => {
  tempTotalNAF += temp;
}
temperatures.forEach(nafAdder);

/*** Exercise 1d */
// 1. Loop over the temperatures array using an anonymous arrow function that adds all the temperatures together into provided tempTotalAAF
let tempTotalAAF = 0;
temperatures.forEach((temp) => {
  tempTotalAAF += temp;
});

/************************************************/


// 2. Output the average temperature by dividing the total by the number of elements in the array 
let _sum = 0;
temperatures.forEach( (temp) => {
  _sum += temp;
})

let tempAvgNRF = _sum/temperatures.length;

/************************************************/

/** Exercise 3a */
// 1. Create 5 objects with 2 properties each: firstName and lastName (providing values for these). As you do so, push them into provided array, people.
let people = [];
people.push({firstName: 'Hal', lastName: 'Helms'});
people.push({firstName: 'Gen', lastName: 'Helms'});
people.push({firstName: 'HP', lastName: 'Helms'});
people.push({firstName: 'Andrew', lastName: 'Helms'});
people.push({firstName: 'Tim', lastName: 'Helms'});

// 2. Using forEach, loop over the people array, combining firstName and lastName (with a space in between) into provided array, peopleNames
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 
let peopleNames = [];
people.forEach( (obj) => {
  peopleNames.push( `${obj.firstName} ${obj.lastName}`);
});

/*** Exercise 3b */
// 1. Using forEach, loop over the people array, outputting the firstName and lastName, using a anonymous regular function.
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 

/*** Exercise 3c */
// 1. Using forEach, loop over the people array, outputting the firstName and lastName, using a named arrow function.
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 

/*** Exercise 3d */
// 1. Using forEach, loop over the people array, outputting the firstName and lastName, using an anonymous arrow function.
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 

/************************************************/

// NOTE: This exercise requires you to have a *nested* loop -- in other words, a loop within another loop. It's actually not as bad as it might seem at first. Here's a simple illustration of that using an anonymous arrow function:

/*** Exercise 4a */
// 1. Create an array, suits, made up of Clubs, Diamonds, Hearts, and Spades

// 2. Create an array, pips, made up of Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, and Ace

// 3. Create an empty array called deck4a

// 4. Loop over pips using an anonymous regular function. For the method body of pips.forEach, loop over suits using an anonymous regular function. Within suits.forEach, create a string made up of the pip, the string, " of ", and the suit. Push that string into the deck4a array. When done, log the deck4a array to the console.

/*** Exercise 4b */
// 1. Create an empty array called deck4b

// 2. Loop over pips using an anonymous arrow function. For the method body of pips.forEach, loop over suits using an anonymous arrow function. Within suits.forEach, create a string made up of the pip, the string, " of ", and the suit. Push that string into the deck4b array. When done, log the deck4b array to the console.

/************************************************/

// NOTE: This exercise is similar to the last one. The difference is that, instead of pushing strings into an array, you'll first build an object with two properties: suit and pip. Then push these objects into the array.
/*** Exercise 5a */
// 1. Create an empty array called deck5a

// 2. Loop over pips using an anonymous arrow function. For the method body of pips.forEach, loop over suits also using a anonymous arrow function. Within suits.forEach, create an object with two properties, pip and suit, that will hold the values that come from the iteration. Push that object into the deck2 array. When done, log the deck5a array to the console.

/************************************************/

/*** Exercise 6a */
// Given this array...
const testScores = ["A", "B", "A", "D", "C", "B", "C", "A", "B", "C", "B", "A", "D"];

// ... and this object...
const gradeDistribution = {
	A: 0,
	B: 0,
	C: 0,
	D: 0
}

// ... loop over testScores, incrementing the appropriate value in gradeDistribution, using the format of forEach you prefer.
// HINT: You don't need to use conditional code here. There's a much more concise way.

module.exports = { 
  temperatures, 
  tempTotalNRF,
  tempTotalARF,
  tempTotalNAF,
  tempTotalAAF,
  tempAvgNRF,
  people,
  peopleNames
};