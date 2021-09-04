


let finalScoreCounter = 0;
		if (optionToApply === 'rightOption') {
			incrementScore(SCORE_POINTS);
			finalScoreCounter += score;
		} else {
			goodCredit.innerText = ``;
			finalScoreCounter += score;
		}
          

		if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {

			if (finalScoreCounter > 500 && finalScoreCounter <= 1000) {
				goodCredit.innerText = `You did it Fam!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, You are an Executive!`;
			} else { //less than or equal to 500
				badCredit.innerText = `Awwww, you couldn't challenge this Fam!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, Try again to be a Pro!`;
			}

		}

    