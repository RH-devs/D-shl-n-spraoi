/**
 * The document.querySelector() & document.querySelectorAll() returns the first element within the document that matches the 
specified selector or group of selectors. They both return null if no matches are found.
 */
let question = document.querySelector('#question');
let options = Array.from(document.querySelectorAll('.Option'));
let progressText = document.querySelector('#progressText');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

let goodCommendation = document.querySelector('#rightCommendation');
let badCommendation = document.querySelector('#wrongCommendation');

let currentQuestion = {};
let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let receiveAnswers = true;

/**
 * Declaring variables used for putting sounds into the quiz game.
 */
let correctSound = new Audio("sounds/correct_sound.mp3");
let incorrectSound = new Audio("sounds/incorrect_sound.mp3");

let myQuestions = [
    {
 question: "What is a woman called?",
            Option1:'Cailin',
            Option2:'Fear',
            Option3:'Buachallin',
            Option4:'Bean',
            correctAnswer: 4,
 },
 {
 question: "Which one of the following represents a school?",
            Option1:'Ospideal',
            Option2:'Scoil',
            Option3:'Staisiun',
            Option4:'Pairc',
            correctAnswer: 2,
 },
 {
 question: "Which one of the following is known as a police station?",
            Option1:'Staisiun Doiteain',
            Option2:'Pairc',
            Option3:'Staisiun na NGardai',
            Option4:'Osipdeal',
            correctAnswer: 2,
 },
 {
 question: "What is a 'bus' known as?",
            Option1:'Crann',
            Option2:'Rothar',
            Option3:'Bhus',
            Option4:'Busaras',
            correctAnswer: 3,
 },
 {
 question: "Which on of the following does a doctor work in?",
            Option1:'Pairc',
            Option2:'Staisiun Doiteain', 
            Option3:'Osipdeal',
            Option4:'Rothar',
            answer: 3,
 },
 {
 question: "Which one of these is 'bread'?",
            Option1:'Cailin',
            Option2:'Uisce' ,
            Option3:'Aran',
            Option4:'Bean',
            correctAnswer: 3,
 },
 {
 question: "What is 'An biachlár'?",
            Option1:'The Bread',
            Option2:'An Apple' ,
            Option3:'The Menu',
            Option4:'The Bottle',
            correctAnswer: 4, 
 },
 {
 question: "Intepret this 'Itheann Pól arán'?",
            Option1:'Traffic Light',
            Option2:'Paul eats bread',
            Option3:'Post office',
            Option4:'The voting Poll',
            correctAnswer: 2,
 },
 {
 question: "What is a newspaper called?",
            Option1:'Aran',
            Option2:'Uisce' ,
            Option3:'Nuachtan',
            Option4:'Cailini',
            correctAnswer: 3,
 },
 {
 question: "What is a boy called?",
            Option1:'Cailin',
            Option2:'Fear' ,
            Option3:'None of the above',
            Option4:'Bean',
            correctAnswer: 3, 
 },
 {
 question: "What is a man called?",
            Option1:'Cailin',
            Option2:'Fear',
            Option3:'Buachallin',
            Option4:'Bean',
            correctAnswer: 2,
 }
 ];

 const MAX_QUESTIONS = 10;
 const SCORE_POINTS = 100;
 let totalScoreOfGradePercent = (SCORE_POINTS * MAX_QUESTIONS);
 
 
 function startQuiz() {
     questionCounter = -1;
     score = 0;
     availableQuestions = [...myQuestions];
     getNewQuestion();
 }
 
 /** the 1st if statement in the function below keeps track of the score, if there are no more 
  * questions or the question counter is greater than the max number of questions (i.e 10), then 
  * the local storage which takes 2 arguments i.e "'mostRecentScore'" which is a string that specifies
  * the name of the key that you want to set the value of and the variable called "score" which is also
  * a string that specifies the value of the key that you want to set the value of, calls the setItem() 
  * method to set this value for onward use. */
 
 
 function getNewQuestion() { // getNewQuestion function starts
     if (availableQuestions.length === 0 || questionCounter === MAX_QUESTIONS) {
         localStorage.setItem('mostRecentScore', score);
     }
 
     /* These 2 lines of code below will increment questionCounter and display the message: "Question 1 of 
     10" and the number before 'of' updates itself as user progresses through the questions */
     questionCounter++;
     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
     progressLevelFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
 
     const randomQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
     currentQuestion = availableQuestions[randomQuestionIndex]; //This will randomly generate the questions.
     question.innerText = currentQuestion.question; //This will display the randomly generated questions to the user in sequence. 
 
 
     options.forEach(option => {
         const number = option.dataset['number'];
         option.innerText = currentQuestion['option' + number];
     });
 
     availableQuestions.splice(randomQuestionIndex, 1);
     receiveAnswers = true;
 } // getNewQuestion function ends
 
 
 options.forEach(option => {
     option.addEventListener('click', e => {
         if (!receiveAnswers) return;
 
         receiveAnswers = false;
         const selectedOption = e.target;
         const selectedResult = selectedOption.dataset['number'];
 
         let optionToApply;
         if (selectedResult == currentQuestion.correctAnswer) {
             optionToApply = 'rightAnswer';
         } else {
             optionToApply = 'wrongAnswer';
         }
 
 
         let finalScoreCounter = 0;
         if (optionToApply === 'rightAnswer') {
             incrementScore(SCORE_POINTS);
             correctSound.play();
             finalScoreCounter += score;
         } else {
             goodCommendation.innerText = ``;
             incorrectSound.play();
             finalScoreCounter += score;
         }
 
         if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
 
             if (finalScoreCounter > 500 && finalScoreCounter <= 1000) {
                 goodCommendation.innerText = `Congratulations buddie😊!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, You are a Pro!`;
             } else { //less than or equal to 500
                 badCommendation.innerText = `Oops, it's a fail buddie😭!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, Better Luck Next Time!`;
             }
 
         }
 
         selectedOption.parentElement.classList.add(optionToApply); //This code adds the right answer to the parent element when the user gets the answer right
 
         setTimeout(() => {
             selectedOption.parentElement.classList.remove(optionToApply);
             getNewQuestion();
 
         }, 1000);
 
     });
 
 });
 
 function incrementScore(num) {
     score += num;
     scoreText.innerText = score;
 }
 
 startQuiz();