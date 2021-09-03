/**
 * The document.querySelector() & document.querySelectorAll() gets back the first element in the document which matches the 
selector or group of selectors specified and would return null if no match is seen.
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

