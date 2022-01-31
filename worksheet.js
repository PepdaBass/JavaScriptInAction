// VARIABLES

// #1. Days of the Week

// let dayOfWeek = "Monday";

// console.log(dayOfWeek);

// dayOfWeek = "Friday";

// console.log("I can't wait for " + dayOfWeek + "!");

// #2. User Input

let animalInput = prompt("What is your favorite animal?")
let colorInput = prompt("What is your favorite color?")

console.log("I've never seen a " + colorInput + " " + animalInput + "!")

// CONDITIONALS

// #1. Meals
// Favorites: Breakfast Burrito, Grilled Cheese Sandwich & Soup, Homemade Pizza

let timeOfDay = 1300;
let favoriteBreakfastLunchOrDinner;

if(timeOfDay < 1200) {
    favoriteBreakfastLunchOrDinner = "Breakfast Burrito";
    console.log("My favorite breakfast is: " + favoriteBreakfastLunchOrDinner + ".")
}

else if(timeOfDay >= 1200 && timeOfDay < 1700) {
    favoriteBreakfastLunchOrDinner = "Grilled Cheese Sandwich & Soup";
    console.log("My favorite lunch is " + favoriteBreakfastLunchOrDinner + ".");
}

else {
    favoriteBreakfastLunchOrDinner = "Homemade Pizza";
    console.log("My favorite dinner is " + favoriteBreakfastLunchOrDinner + ".")
}