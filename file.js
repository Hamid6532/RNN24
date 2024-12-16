// Arrays of programming languages and colors
const languages = ["Java", "Python", "JavaScript", "C++", "Ruby", "Swift", "PHP", "Go", "Rust", "Kotlin",
     "TypeScript", "Scala", "Haskell", "Clojure", "Erlang", "Elixir", "Perl", "Lua", "Tcl", "SQL",
     "Julia", "Dart", "Flutter", "C#", "F#", "Visual Basic", "Delphi", "Pascal", "Fortran", "Assembly"];

const colors = ["blue", "green", "yellow", "Brown", "red", "orange", "purple", "bluegreen", 
    "orangered", "greenblue", "blueviolet", "redviolet", "deeppurple", "brightgreen", "lavender",
     "pink", "teal", "mint", "coral", "navyblue", "magenta", "turquoise", "lightblue", "darkgray", 
     "lightgray", "royalblue", "burgundy", "forestgreen", "skyblue", "metallicsilver"];

let score = 0;
let trials = 0;
let failures = 0;
const maxTrials = 20;
const maxFailures = 5;

const languageInput = document.getElementById("language");
const colorInput = document.getElementById("color");
const resultContainer = document.getElementById('result');
const scoreDisplay = document.getElementById("score");
const restDisplay = document.getElementById("rest");

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();

  const languageValue = languageInput.value;
  const colorValue = colorInput.value.toLowerCase();

  const index = languages.indexOf(languageValue);
  const correctColor = colors[index];

  if (languages.includes(languageValue)) {
    if (correctColor === colorValue) {
      resultContainer.textContent = "Great!!!";
      resultContainer.style.backgroundColor = correctColor;
      resultContainer.style.color = 'black';
      failures = 0;
      score++;
    } else {
      resultContainer.textContent = `Incorrect. The color of ${languageValue} is not ${colorValue}.`;
      resultContainer.style.backgroundColor = "red";
      failures++;
    }
  } else {
    resultContainer.textContent = `Invalid language: ${languageValue}`;
    resultContainer.style.backgroundColor = "red";
  }

  trials++;
  scoreDisplay.textContent = `Score: ${score} / ${maxTrials}`;
  restDisplay.textContent = `Trials remaining: ${maxTrials - trials} | Failures: ${failures} / ${maxFailures}`;

  if (trials >= maxTrials || failures >= maxFailures) {
    resultContainer.textContent = `Game over! Your final score is ${score} / ${maxTrials}.`;
    languageInput.disabled = true;
    colorInput.disabled = true;
    document.getElementById('submit').disabled = true;
  }
});

// Display language list for 5 seconds
function displayLanguageList() {
  const languageList = document.getElementById("language-list");
  languageList.style.display = "block";

  setTimeout(() => {
    languageList.style.display = "none";
  }, 5000);
}

displayLanguageList();
