let question = document.querySelector('#question');
let options = Array.from(document.querySelectorAll('.answer-text'));
let progressText = document.querySelector('#progressText');
let scoreText = document.querySelector('#score');
let fullProgressBar = document.querySelector('#fullProgressBar');

let goodCredit = document.querySelector('#goodCredit');
let badCredit = document.querySelector('#badCredit');

let currentQuestion = {};
let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let receivingAnswers = true;

/**
 * Declaring variables used for putting sounds into the quiz game.
 */


let theQuestions = [
     {
  question: 'What is a woman called?',
             option1:'Cailin',
             option2:'Fear',
             option3:'Buachallin',
             option4:'Bean',
             correctAnswer: 4,
  },
  {
  question: 'Which one of the following represents a school?',
             option1:'Ospideal',
             option2:'Scoil',
             option3:'Staisiun',
             option4:'Pairc',
             correctAnswer: 2,
  },
  {
  question: 'Which one of the following is known as a police station?',
             option1:'Staisiun Doiteain',
             option2:'Pairc',
             option3:'Staisiun na NGardai',
             option4:'Osipdeal',
             correctAnswer: 2,
  },
  {
  question: 'What is a "bus" known as?',
             option1:'Crann',
             option2:'Rothar',
             option3:'Bhus',
             option4:'Busaras',
             correctAnswer: 3,
  },
  {
  question: 'Which one of the following does a doctor work in?',
             option1:'Pairc',
             option2:'Staisiun Doiteain', 
             option3:'Osipdeal',
             option4:'Rothar',
             correctAnswer: 3,
  },
  {
  question: 'Which one of these is "bread"?',
             option1:'Cailin',
             option2:'Uisce' ,
             option3:'Aran',
             option4:'Bean',
             correctAnswer: 3,
  },
  {
  question: 'What is "An biachlár"?',
             option1:'The Bread',
             option2:'An Apple' ,
             option3:'The Menu',
             option4:'The Bottle',
             correctAnswer: 4, 
  },
  {
  question: 'Intepret this "Itheann Pól arán"?',
             option1:'Traffic Light',
             option2:'Paul eats bread',
             option3:'Post office',
             option4:'The voting Poll',
             correctAnswer: 2,
  },
  {
  question: 'What is a newspaper called?',
             option1:'Aran',
             option2:'Uisce' ,
             option3:'Nuachtan',
             option4:'Cailini',
             correctAnswer: 3,
  },
  {
  question: 'What is a boy called?',
             option1:'Cailin',
             option2:'Fear' ,
             option3:'None of the above',
             option4:'Bean',
             correctAnswer: 3, 
  },
  ];

  /**Code below shows the maximum number of questions for the quiz and the score points per question.*/
const MAX_QUESTIONS = 10;
const SCORE_POINTS = 100;
let totalScoreOfGradePercent = (SCORE_POINTS * MAX_QUESTIONS);


function startQuiz() {
	questionCounter = -1;
	score = 0;
	availableQuestions = [...theQuestions];
	getNewQuestion();
}

/**
 * The 'if' statement in the function below will keep track of the score generated from playing the Quiz, 
*  should there be no more question to be answered or the counter for question is higher than the maximum number of questions, 
 * then the local storage takes these 2 arguments which 'mostRecentScore' and 'score' which are strings that specifies the name of the keys
 * to be set for the value of. The 'score' variable also calls the setItem() to set this value for future use.
 */

function getNewQuestion() { // getNewQuestion function starts
	if (availableQuestions.length === 0 || questionCounter === MAX_QUESTIONS) {
		localStorage.setItem('mostRecentScore', score);
	}

	/** Code below states the questionCounter increment and message display of question number updates 
       * following user progression through the questions*/
	questionCounter++;
	progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
	fullProgressBar.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

     /** Code below will help generate questions randomly and can also generate questions in sequential order*/
	const randomQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[randomQuestionIndex];
	question.innerText = currentQuestion.question; 

	options.forEach(option => {
		const number = option.dataset['number'];
		option.innerText = currentQuestion['option' + number];
	});

	availableQuestions.splice(randomQuestionIndex, 1);
	receivingAnswers = true;
} // getNewQuestion function ends


options.forEach(option => {
	option.addEventListener('click', e => {
		if (!receivingAnswers) return;

		receivingAnswers = false;
		const selectedOption = e.target;
		const selectedResult = selectedOption.dataset['number'];

		let optionToApply = selectedResult == currentQuestion.correctAnswer ? 'rightOption' : 'wrongOption'
		
		let finalScoreCounter = 0;
		if (optionToApply === 'rightOption') {
			incrementScore(SCORE_POINTS);
			finalScoreCounter += score;
		} else {
			goodCredit.innerText = ``;
			finalScoreCounter += score;
		}
          selectedOption.parentElement.classList.add(optionToApply); 

		setTimeout(() => {
			selectedOption.parentElement.classList.remove(optionToApply);
			getNewQuestion();

		if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

			if (finalScoreCounter > 500 && finalScoreCounter <= 1000) {
				goodCredit.innerText = `You did it Fam!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, You are an Executive!`;
			} else { //less than or equal to 500
				badCredit.innerText = `Awwww, you couldn't challenge this Fam!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, Try again to be a Pro!`;
			}

		}

		}, 1000);

	});

});

function incrementScore(num) {
	score += num;
	scoreText.innerText = score;
}

startQuiz();


		