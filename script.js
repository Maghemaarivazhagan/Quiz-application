const questions = [
{
    question:"Which of the following data structures uses the LIFO (Last In, First Out) principle?",
    answers:[
        { text:"Queue",correct: false},
        { text:"Stack",correct: true},
        { text:"Array",correct: false},
        { text:"Linked List",correct: false},    
    ]
    },
    {
        question:"What does HTML stand for?",
        answers:[
            { text:"Hyperlinks and Text Markup Language",correct: false},
            { text:"Home Tool Markup Language",correct: false},
            { text:"Hyper Text Markup Language",correct: true},
            { text:" Hyper Textual Marking Language",correct: false},    
        ]  
    },
    {
        question:"Which of the following is NOT a JavaScript data type?",
        answers:[
            { text:"Undefined",correct: false},
            { text:"Number",correct: false},
            { text:"Float",correct: true},
            { text:"String",correct: false},    
        ]  
    },
    {
        question:"What is the correct way to declare a variable in JavaScript",
        answers:[
            { text:" var name;",correct: false},
            { text:"let name;",correct: false},
            { text:"const name;",correct: false},
            { text:" All of the above",correct: true},    
        ]  
    },
    {
    question:"Which of the following sorting algorithms has the worst-case time complexity of O(n²)?",
    answers:[
        { text:" Merge Sort;",correct: false },
        { text:"Quick Sort;",correct: false },
        { text:"Insertion Sort;",correct: true },
        { text:"Heap sort",correct: false },    
    ]  
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function StartQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " +
     currentQuestion.question;  
     
     currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
     });
}
StartQuiz();

  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
  }
   function selectAnswer(e){
       const selectedBtn = e.target;
       const isCorrect = selectedBtn.dataset.correct ==="true";
       if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
       }
       else{
        selectedBtn.classList.add("incorrect");
       }
       Array.from(answerButtons.children).forEach(button =>
       {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
       });
       nextButton.style.display = "block";
   }
   function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score}  out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
   }
   function handleNextButton(){
         currentQuestionIndex++;
         if(currentQuestionIndex <  questions.length){
            showQuestion();
         }
         else{
            showScore();
         }
   }
nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();}
            else{
                StartQuiz();
            }
})
  