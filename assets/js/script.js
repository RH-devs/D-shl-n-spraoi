
let scoreText = document.querySelector('#score');
let mostRecentScore = document.querySelector('#mostRecentScore');

let goodCredit = document.querySelector('#goodCredit');
let badCredit = document.querySelector('#badCredit');

let availableQuestions = [];
let questionCounter = 0;
let score = 0;
let finalScoreCounter = [];

 /**Code below shows the maximum number of questions for the quiz and the score points per question.*/
 const MAX_QUESTIONS = 10;
 const SCORE_POINTS = 100;
 let totalScoreOfGradePercent = (SCORE_POINTS * MAX_QUESTIONS);
 


	

   if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

	if (finalScoreCounter > 500 && finalScoreCounter <= 1000) {
		goodCredit.innerText = `You did it Fam!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, You are an Executive!`;
    } else { //less than or equal to 500
		badCredit.innerText = `Awwww, you couldn't challenge this Fam!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, Try again to be a Pro!`;
			}

		}
		if (optionToApply === 'rightOption') {
			incrementScore(SCORE_POINTS);
			finalScoreCounter += score;
	   } else {
		goodCredit.innerText = ``;
	  finalScoreCounter += score;
	  } 1000;


		function incrementScore(num) {
			score += num;
			scoreText.innerText = score;
		}

		function finalScore(num) {
			score += num;
			finalScore.innerText = mo;
		}