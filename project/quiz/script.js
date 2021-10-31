const quizData = [
   {
      question: 'In what country the death penalty for crime forbidden?',
      a: 'Australia',
      b: 'the United States',
      c: 'India',
      d: 'Belarus',
      correct: 'a'
   },
   {
      question: 'In what country are the world\'s ten coldest cities located?',
      a: 'Russia',
      b: 'the United States',
      c: 'Canada',
      d: 'Chile',
      correct: 'a'
   },
   {
      question: 'What kind of government is that of Oman?',
      a: 'caliphate',
      b: 'democracy',
      c: 'sultanate',
      d: 'plebiscite',
      correct: 'c'
   },
   {
      question: 'In what country might you find the Loch Ness monster?',
      a: 'Belgium',
      b: 'Canada',
      c: 'Scotland',
      d: 'England',
      correct: 'c'
   },
   {
      question: 'What country does not use the dollar?',
      a: 'India',
      b: 'Australia',
      c: 'New Zealand',
      d: 'Canada',
      correct: 'a'
   }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
   deselectAnswers();
   const currentQuizData = quizData[currentQuiz];

   question.innerText = currentQuizData.question;
   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}

function getSelected() {
   let answer = undefined;

   answersEls.forEach((answerEl) => {
      if(answerEl.checked) {
         answer = answerEl.id;
      }
   });

   return answer;
}

function deselectAnswers() {
   answersEls.forEach((answerEl) => {
      answerEl.checked = false;
   });
}

submit.addEventListener('click', () => {
   const answer = getSelected();

   if(answer) {
      if(answer === quizData[currentQuiz].correct) {
         score++;
      }
      currentQuiz++;
      if(currentQuiz < quizData.length) {
         loadQuiz();
      } else {
         quiz.innerHTML = `
         <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
         <button onclick="location.reload()">Reload</button>
         `;
      }
   }
});