/** Exercise 1 */
// 1. Create an array, temperatures, with 10 different temperatures
let temperatures;
temperatures = [93,87,84,81,88,91,93,86,101,99];

/** Exercise 2 */

// 1. Loop over the temperatures array using a named regular function that adds all the temperatures together into provided tempTotalNRF
let tempTotalNRF = 0;
function sumTemps(temp) {
  tempTotalNRF += temp;
}
temperatures.forEach(sumTemps);

// 2. Loop over the temperatures array using a anonymous regular function that adds all the temperatures together into provided tempTotalARF
let tempTotalARF = 0;
temperatures.forEach( function(temp) {
  tempTotalARF += temp;
})

// 3. Loop over the temperatures array using a named arrow function that adds all the temperatures together into provided tempTotalNAF
let tempTotalNAF = 0;
let nafAdder = (temp) => {
  tempTotalNAF += temp;
}
temperatures.forEach(nafAdder);

// 4. Loop over the temperatures array using an anonymous arrow function that adds all the temperatures together into provided tempTotalAAF
let tempTotalAAF = 0;
temperatures.forEach((temp) => {
  tempTotalAAF += temp;
});

/** Exercise 3 */
// 1. Output the average temperature by dividing the total by the number of elements in the array 
let tempAvgNRF;
let _sum = 0;
temperatures.forEach( (temp) => {
  _sum += temp;
})

tempAvgNRF = _sum/temperatures.length;

/** Exercise 3 */
// 1. Create 5 objects with 2 properties each: firstName and lastName (providing values for these). As you do so, push them into provided array, people.
let people = [];
people.push({firstName: 'Hal', lastName: 'Helms'});
people.push({firstName: 'Gen', lastName: 'Helms'});
people.push({firstName: 'HP', lastName: 'Helms'});
people.push({firstName: 'Andrew', lastName: 'Helms'});
people.push({firstName: 'Tim', lastName: 'Helms'});

// 2. Using forEach and an anonymous arrow function, loop over the people array, combining firstName and lastName (with a space in between) into provided array, peopleNamesAAF
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 
let peopleNamesAAF = [];
people.forEach( (obj) => {
  peopleNamesAAF.push( `${obj.firstName} ${obj.lastName}`);
});
// 3. Using forEach and an named arrow function, loop over the people array, combining firstName and lastName (with a space in between) into provided array, peopleNamesNAF
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 
let peopleNamesNAF = [];
people.forEach( (obj) => {
  peopleNamesNAF.push( `${obj.firstName} ${obj.lastName}`);
});
// 4. Using forEach and a named regular function, loop over the people array, combining firstName and lastName (with a space in between) into provided array, peopleNamesNRF
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 
let peopleNamesNRF = [];
people.forEach( (obj) => {
  peopleNamesNRF.push( `${obj.firstName} ${obj.lastName}`);
});
// 5. Using forEach and an anonymous regular function, loop over the people array, combining firstName and lastName (with a space in between) into provided array, peopleNamesARF
// (Suggestion: Use template literals to combine firstName and lastName into a single string) 
let peopleNamesARF = [];
people.forEach( (obj) => {
  peopleNamesARF.push( `${obj.firstName} ${obj.lastName}`);
});

/** Exercise 4 */

// NOTE: This exercise requires you to have a *nested* loop -- in other words, a loop within another loop. It's actually not as bad as it might seem at first. Here's a simple illustration of that using an anonymous arrow function:

// 1. Create an array, suits, made up of Clubs, Diamonds, Hearts, and Spades
let suits = [];
suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

// 2. Create an array, pips, made up of Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King, and Ace
let pips = [];
pips = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];

// 3. Create an empty array called deck4a
let deck4a = [];

// 4. Loop over pips using an anonymous arrow function. For the method body of pips.forEach, loop over suits using an anonymous regular function. Within suits.forEach, create a string made up of the pip, the string, " of ", and the suit. Push that string into the deck4a array.
pips.forEach( (pip) => {
  suits.forEach( (suit) => {
    deck4a.push(`${pip} of ${suit}`);
  })
})

/** Exercise 5 */
// NOTE: This exercise is similar to the last one. The difference is that, instead of pushing strings into an array, you'll first build an object with two properties: suit and pip. Then push these objects into the array.

let deck5a = [];
pips.forEach( (pip) => {
  suits.forEach( (suit) => {
    deck5a.push({pip, suit});
  });
})

/** Exercise 6 */
// Given this array...
const testScores = ["A", "B", "A", "D", "C", "B", "C", "A", "B", "C", "B", "A", "D"];

// ... and this object...
const gradeDistribution = {
	A: 0,
	B: 0,
	C: 0,
	D: 0
};

testScores.forEach( (score) => {
  gradeDistribution[score]++;
});

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
  peopleNamesAAF,
  peopleNamesARF,
  peopleNamesNAF,
  peopleNamesNRF,
  suits,
  pips,
  deck4a,
  deck5a,
  gradeDistribution
};