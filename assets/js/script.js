function main() {
    return 'Are you ready?';
}

main();

    let question = document.querySelector('#questionBar')
    let answers = Array.from(document.querySelectorAll('.option'));
    let progressText = document.querySelector('#progresstext');
    let scoreText = document.querySelector('.score');
    let progressBarFull = document.querySelector('#progressBarFull');
 
    let currentQuestion = {};
    let questionCounter = 0;
    let availableQuestions = [];
    let collectingAnswers = true;
    let score = 0;
    
    /**
     *Declaring variables for the quiz game
     */
    let thequestions = [
        {
     question: "What is a woman called?",
                Option1:'Cailin',
                Option2:'Fear',
                Option3:'Buachallin',
                Option4:'Bean',
                answer: 4,
     },
     {
     question: "Which one of the following represents a school?",
                Option1:'Ospideal',
                Option2:'Scoil',
                Option3:'Staisiun',
                Option4:'Pairc',
                answer: 2,
     },
     {
     question: "Which one of the following is known as a police station?",
                Option1:'Staisiun Doiteain',
                Option2:'Pairc',
                Option3:'Staisiun na NGardai',
                Option4:'Osipdeal',
                answer: 2,
     },
     {
     question: "What is a 'bus' known as?",
                Option1:'Crann',
                Option2:'Rothar',
                Option3:'Bhus',
                Option4:'Busaras',
                answer: 3,
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
                answer: 3,
     },
     {
     question: "What is 'An biachlár'?",
                Option1:'The Bread',
                Option2:'An Apple' ,
                Option3:'The Menu',
                Option4:'The Bottle',
                answer: 4, 
     },
     {
     question: "Intepret this 'Itheann Pól arán'?",
                Option1:'Traffic Light',
                Option2:'Paul eats bread',
                Option3:'Post office',
                Option4:'The voting Poll',
                answer: 2,
     },
     {
     question: "What is a newspaper called?",
                Option1:'Aran',
                Option2:'Uisce' ,
                Option3:'Nuachtan',
                Option4:'Cailini',
                answer: 3,
     },
     {
     question: "What is a boy called?",
                Option1:'Cailin',
                Option2:'Fear' ,
                Option3:'None of the above',
                Option4:'Bean',
                answer: 3, 
     },
     {
     question: "What is a man called?",
                Option1:'Cailin',
                Option2:'Fear',
                Option3:'Buachallin',
                Option4:'Bean',
                answer: 2,
     }
     ]
 
           

    