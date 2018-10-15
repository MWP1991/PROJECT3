/**
 *   @author Page, Marshall (mpage@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 || created: 10.14.2018
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const MAX_STARS = 5;
let continueResponse;
let counter, rating, averageStars, total;

function main() {
    setContinueResponse();
    while (continueResponse === 1){
        setRating();
        setCounter();
        setTotal();
        setContinueResponse();
    }
    setAverageStars()
    printAverageStars();
    printGoodbye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

function setCounter() {
    if (counter != null) {
        counter++;
    } else {
        counter = 1;
    }
}

function setRating() {
    rating = Number(PROMPT.question('\nWhat would you like to rate this film from 1-5? '));
    if (rating < 1 || rating > MAX_STARS) {
        console.log(`I'm Sorry, that value is incorrect. Please try again.`);
    }
}

function setTotal() {
    if (!total){
        total = 0;
    }
    total = (total + rating);
}

function setAverageStars() {
    averageStars = total / counter;
}

function printAverageStars() {
    console.log(` After ${counter} reviews, ${averageStars} has been the average star rating`)
}

/**

 * @method
 * @desc Print goodbye utility method
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\tGoodbye.`);
}


/*
Design a program for the Hollywood Movie Rating Guide,
in which users continuously enter a value from 0 to 5 that indicates
the number of stars they are awarding to a movie title they are prompted for.
The program executes continuously until a user decides to quit.
If a user enters a star value that does not fall in the correct range,
re-prompt the user three (3) times until a correct value is entered.
At the end of the program, display the average star rating for the movie.
 */