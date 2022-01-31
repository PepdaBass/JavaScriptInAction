// VARIABLES

// #1. Days of the Week

// let dayOfWeek = "Monday";

// console.log(dayOfWeek);

// dayOfWeek = "Friday";

// console.log("I can't wait for " + dayOfWeek + "!");

// // #2. User Input

// let animalInput = prompt("What is your favorite animal?")
// let colorInput = prompt("What is your favorite color?")

// console.log("I've never seen a " + colorInput + " " + animalInput + "!")

// // CONDITIONALS

// #1. Meals
// Favorites: Breakfast Burrito, Grilled Cheese Sandwich & Soup, Homemade Pizza

// let timeOfDay = 1700;
// let favoriteBreakfastLunchOrDinner;

// if(timeOfDay < 1200) {
//     favoriteBreakfastLunchOrDinner = "Breakfast Burrito";
//     console.log("My favorite breakfast is: " + favoriteBreakfastLunchOrDinner + ".")
// }

// else if(timeOfDay >= 1200 && timeOfDay < 1700) {
//     favoriteBreakfastLunchOrDinner = "Grilled Cheese Sandwich & Soup";
//     console.log("My favorite lunch is: " + favoriteBreakfastLunchOrDinner + ".");
// }

// else if(timeOfDay >= 1700) {
//     favoriteBreakfastLunchOrDinner = "Homemade Pizza";
//     console.log("My favorite dinner is: " + favoriteBreakfastLunchOrDinner + ".")
// }

// // #2. Random Number

// randomNumber = Math.floor(Math.random() * 11);

// if(randomNumber >= 0 && randomNumber <= 2) {
//     console.log("Beatles");
// }

// else if(randomNumber >=3 && randomNumber <= 5) {
//     console.log("Stones");
// }

// else if(randomNumber >= 6 && randomNumber <= 8) {
//     console.log("Floyd");
// }

// else {
//     console.log("Hendrix");
// }


// // LOOPS (for loops)

// // #1. JavaScript is Cool

// for(let i = 0; i < 7; i++) {
//     console.log("JavaScript is cool!")
// }

// // #2 Counting 0-10

// let counter = 0;

// for(let i = 0; i < 11; i++) {
//     console.log(counter);
//     counter = counter + 1;
// }

// // #3. Hello-Goodbye Sequence

// let counter = 0;

// for(let i = 0; i < 10; i++) {
//     if(counter == 0) {
//         console.log("Hello");
//         counter += 1;
//     }

//     else if(counter % 2 != 0) {
//         console.log("Goodbye");
//         counter += 1;
//     }

//     else if(counter % 2 == 0) {
//         console.log("Hello");
//         counter += 1;
//     }
// }


// FUNCTIONS

// #1. Favorite Movie


function printMovieName() {
    let favoriteMovie = "Caddyshack";
    return favoriteMovie;
}

let bestMovie = printMovieName();
console.log("Your favorite movie is: " + bestMovie);

// #2. Favorite Band

function pickFavoriteBand() {
    let userFavoriteBand = prompt("What is your favorite band?");
    return userFavoriteBand;
}

let favoriteBand = pickFavoriteBand();
console.log("Your favorite band is: " + favoriteBand);

// #3. Concert

function concertDisplay(musicalAct) {
    let myStreet = prompt("What street do you live on?");
    console.log("It would be great if " + musicalAct + " played a show on " + myStreet + "!");
}

concertDisplay(favoriteBand);

