var questionsArr = [
  {
    title: "CSS Stands For ? ",
    a: "Cascading style sheet",
    b: "Cestyle sheet",
    c: "Style Sheet",
    correct: "a",
  },
  {
    title: "HTML Stands For ? ",
    a: "Market TEXT MARKUP LANG",
    b: "HYPER TEXT MARKUP LANG",
    c: "Heno Tust Markup Linear",
    correct: "b",
  },
  {
    title: "What's the JS ? ",
    a: "It's a type of some food",
    b: "It's a prog.. lang",
    c: "It's a type of cars",
    correct: "b",
  },
];
var labA = document.getElementById("quesA");
var labB = document.getElementById("quesB");
var labC = document.getElementById("quesC");
var questionTitle = document.getElementById("question");
var submit = document.getElementById("btnSub");
var answerInp = document.querySelectorAll(".answers");
var form = document.querySelector("form");
var score = 0;
var currentQuiz = 0;

loadQuiz();
function loadQuiz() {
  deselectedItems();
  const currentQuizData = questionsArr[currentQuiz];
  labA.innerText = currentQuizData.a;
  labB.innerText = currentQuizData.b;
  labC.innerText = currentQuizData.c;
  questionTitle.innerText = currentQuizData.title;
}

function deselectedItems() {
  answerInp.forEach((items) => {
    items.checked = false;
  });
}

function getSelected() {
  let ans;
  answerInp.forEach((items) => {
    if (items.checked) {
      ans = items.id;
    }
  });
  return ans;
}

submit.addEventListener("click", () => {
  var anser = getSelected();
  if (anser) {
    if (currentQuiz < questionsArr.length) {
      if (anser === questionsArr[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < questionsArr.length) {
        loadQuiz();
      } else {
        displayResult();
      }
    }
  }
});

function displayResult() {
  form.innerHTML = `
  <h2 class="headerScore">You answered ${score} / ${questionsArr.length} questions correctly.</h2> 
  <button onclick="location.reload()">Reload</button>
  `;
}
