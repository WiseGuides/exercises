// Exercises for Intro to JavaScript Arrays

// 1. Create an array, 'fibs',  of the first 10 numbers in the Fibonacci series: 1, 1, 2, 3, 5, 8, 13, 21, 34, and 55.

// 2. Use the forEach method of 'fibs', providing a named regular function that accepts a number and outputs the number to the console.

// 3. Use the forEach method of 'fibs', providing an anonymous regular function that accepts a number, multiplies it by itself (squares it), and outputs the results to the console.

// 4. Use the forEach method of 'fibs', providing a named arrow function that accepts a number, multiplies it by 2 (doubles it), and outputs the results to the console.

// 5. Use the forEach method of 'fibs', providing a named regular function that accepts a number, and outputs its negative counterpart to the console. (So 3 becomes -3. You can do this by multiplying the number by -1.)

// 6. Create an array, 'months', with the twelve months of the year.

// 7. Change the sixth month of the year (index 5) from 'June' to its German equivalent, 'Juni'.

// 8. Add a thirteenth month of the year, set to your first name.

// 9. Output the number of elements in the 'months' array to the console, using the 'length' property of the  array.

// 10. Create an empty array, 'seasons'.

// 11. Using the 'push' method of 'seasons', add the four seasons to your array.

// 12. Will the following code produce an error?
// console.log([1,2,3,4].length);

// 13. Will the following code produce an error?
// [1,2,3,4].forEach( num => console.log(num*num));

// Given the following variables...
let person = {firstName: 'Al', lastName: 'Capone'};
let city = "Chicago";
let isCriminal = true;
let associates = ['Robert Carey', 'Jack McGurn', 'Frank Nitti'];

// 14. Create an array, 'facts', and push each of these variables into the array

// 15. Create an array, 'suits', made up of 'Clubs', 'Diamonds', 'Hearts', and 'Spades'

// 16. Create an array, 'pips', made up of 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', and 'King'.

// 17. Create an empty array, 'deck'

// 18. Run the following code:
// suits.forEach( suit => {
// 	pips.forEach( pip => {
// 		deck.push (pip + ' of ' + suit);
// 	}); 
// });

// 19. This should produce a deck of standard playing cards. Use 'forEach' to loop over 'deck' and output each card to the console.

// 20. Insert two 'Joker' cards into 'deck', one at the beginning, and one at the end.