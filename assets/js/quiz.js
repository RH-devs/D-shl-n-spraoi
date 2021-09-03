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
let receivingAnswers = true;

let theQuestions = [
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
let totalScoreofPercentGrade =(SCORE_POINTS * MAX_QUESTIONS);

function startQuiz() {
     questionCounter = 1;
     score = 0;
     availableQuestions = [...theQuestions];
     getNewQuestion();
}
