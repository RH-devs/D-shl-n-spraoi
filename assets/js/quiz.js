/**
 * The document.querySelector() & document.querySelectorAll() returns the first element within the document that matches the 
specified selector or group of selectors. They both return null if no matches are found.
 */
let question = document.querySelector('#question');
let options = Array.from(document.querySelectorAll('.Option'));
let progressText = document.querySelector('#progressText');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

let rightCredit = document.querySelector('#rightCredit');
let wrongCredit = document.querySelector('#wrongCredit');

let currentQuestion = {};
let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let receiveAnswers = true;

