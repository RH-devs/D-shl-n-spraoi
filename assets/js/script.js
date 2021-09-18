
let totalScoreOfGradePercent = (SCORE_POINTS * MAX_QUESTIONS);
   
if (finalScoreCounter > 500 && finalScoreCounter <= 1000) {
    goodCredit.innerText = `Congratulations 😊!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, You are a Pro!`;
} else { //less than or equal to 500
    badCredit.innerText = `Oops😭!!! Your Final score is ${score} out of ${totalScoreOfGradePercent}, Better Luck Next Time!`;
}


