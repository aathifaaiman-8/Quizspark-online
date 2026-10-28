// QuizSpark: interactive timed quiz application.
// Questions are shuffled for every attempt. Best scores are saved in Local Storage.

const quizData = {
  "General Knowledge": {
    icon: "🌍", description: "Everyday facts & discoveries",
    questions: [
      { q: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: 2, explanation: "The Pacific Ocean is the largest and deepest ocean on Earth." },
      { q: "How many sides does a hexagon have?", options: ["Five", "Six", "Seven", "Eight"], answer: 1, explanation: "A hexagon is a polygon with six sides." },
      { q: "Which planet is known as the Red Planet?", options: ["Venus", "Jupiter", "Mars", "Mercury"], answer: 2, explanation: "Iron-rich dust gives Mars its reddish appearance." },
      { q: "What is the capital city of Japan?", options: ["Kyoto", "Seoul", "Beijing", "Tokyo"], answer: 3, explanation: "Tokyo is the capital of Japan." },
      { q: "Which instrument measures temperature?", options: ["Barometer", "Thermometer", "Compass", "Altimeter"], answer: 1, explanation: "A thermometer measures temperature." },
      { q: "How many days are there in a leap year?", options: ["364", "365", "366", "367"], answer: 2, explanation: "A leap year has 366 days because February has 29 days." },
      { q: "Which is the smallest prime number?", options: ["0", "1", "2", "3"], answer: 2, explanation: "Two is the smallest prime number and the only even prime." },
      { q: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 1, explanation: "Plants use carbon dioxide during photosynthesis." },
      { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: 2, explanation: "The official currency of Japan is the yen." },
      { q: "Which is the tallest land animal?", options: ["Elephant", "Camel", "Giraffe", "Ostrich"], answer: 2, explanation: "Giraffes are the tallest living land animals." }
    ]
  },
  "Science": {
    icon: "🧪", description: "Explore the natural world",
    questions: [
      { q: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], answer: 2, explanation: "Au comes from the Latin word aurum." },
      { q: "Which part of a plant mainly absorbs water?", options: ["Flower", "Roots", "Leaves", "Stem"], answer: 1, explanation: "Roots absorb water and minerals from the soil." },
      { q: "What force keeps planets in orbit around the Sun?", options: ["Friction", "Magnetism", "Gravity", "Electricity"], answer: 2, explanation: "The Sun's gravity keeps planets in their orbits." },
      { q: "What is the approximate speed of light in a vacuum?", options: ["300,000 km/s", "30,000 km/s", "3,000 km/s", "300 km/s"], answer: 0, explanation: "Light travels at about 300,000 kilometres per second in a vacuum." },
      { q: "Which organ pumps blood around the human body?", options: ["Lungs", "Brain", "Kidney", "Heart"], answer: 3, explanation: "The heart pumps blood through the circulatory system." },
      { q: "What is H₂O commonly known as?", options: ["Hydrogen", "Water", "Oxygen", "Salt"], answer: 1, explanation: "A water molecule contains two hydrogen atoms and one oxygen atom." },
      { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 2, explanation: "Nitrogen makes up about 78% of Earth's atmosphere." },
      { q: "What is the center of an atom called?", options: ["Electron", "Nucleus", "Cell", "Orbit"], answer: 1, explanation: "The nucleus contains protons and usually neutrons." },
      { q: "Which vitamin can the body produce with help from sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 3, explanation: "Sunlight enables the skin to produce vitamin D." },
      { q: "At sea level, water boils at what temperature in Celsius?", options: ["0°C", "50°C", "100°C", "150°C"], answer: 2, explanation: "At standard atmospheric pressure, water boils at 100°C." }
    ]
  },
  "Technology": {
    icon: "💻", description: "Computers, web & digital life",
    questions: [
      { q: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HighText Machine Language", "HyperText Markdown Language"], answer: 1, explanation: "HTML means HyperText Markup Language." },
      { q: "Which language adds interactivity to many websites?", options: ["JavaScript", "SQL", "HTML only", "XML"], answer: 0, explanation: "JavaScript is commonly used to make web pages interactive." },
      { q: "What does CPU stand for?", options: ["Computer Personal Unit", "Central Processing Unit", "Core Program Utility", "Central Power User"], answer: 1, explanation: "The CPU executes instructions and processes data." },
      { q: "Which one is a web browser?", options: ["Python", "Linux", "Google Chrome", "MySQL"], answer: 2, explanation: "Google Chrome is a web browser used to access websites." },
      { q: "What does CSS primarily control on a webpage?", options: ["Visual styling and layout", "Database storage", "Internet speed", "Hardware power"], answer: 0, explanation: "CSS styles HTML content, including colours, spacing and layout." },
      { q: "Which of these is an example of an operating system?", options: ["HTML", "Windows", "Google Search", "Wi-Fi"], answer: 1, explanation: "Windows is an operating system." },
      { q: "What is a strong password practice?", options: ["Use your name only", "Reuse one password everywhere", "Use a long unique password", "Share it with friends"], answer: 2, explanation: "A long, unique password reduces the risk of account compromise." },
      { q: "What does URL stand for?", options: ["Uniform Resource Locator", "Universal Reading Link", "User Reference Line", "Unified Routing Language"], answer: 0, explanation: "A URL identifies the location of a resource on the web." },
      { q: "Which number system do computers fundamentally use?", options: ["Decimal", "Binary", "Roman", "Base 12"], answer: 1, explanation: "Digital computers represent data using binary values, 0 and 1." },
      { q: "What is GitHub commonly used for?", options: ["Editing photos only", "Hosting and collaborating on code", "Sending SMS", "Making phone calls"], answer: 1, explanation: "GitHub hosts code repositories and supports collaboration and version control." }
    ]
  },
  "Mathematics": {
    icon: "➗", description: "Numbers, logic & patterns",
    questions: [
      { q: "What is 12 × 8?", options: ["86", "92", "96", "108"], answer: 2, explanation: "12 multiplied by 8 equals 96." },
      { q: "What is the square root of 144?", options: ["10", "11", "12", "14"], answer: 2, explanation: "12 × 12 = 144." },
      { q: "How many degrees are in a right angle?", options: ["45°", "90°", "180°", "360°"], answer: 1, explanation: "A right angle measures exactly 90 degrees." },
      { q: "What is 25% of 200?", options: ["25", "40", "50", "75"], answer: 2, explanation: "25% is one quarter, and one quarter of 200 is 50." },
      { q: "Which number is a prime number?", options: ["21", "27", "29", "33"], answer: 2, explanation: "29 has exactly two positive divisors: 1 and 29." },
      { q: "What is the value of 7²?", options: ["14", "42", "49", "56"], answer: 2, explanation: "7 squared is 7 × 7 = 49." },
      { q: "What is the perimeter of a square with side 5 cm?", options: ["10 cm", "15 cm", "20 cm", "25 cm"], answer: 2, explanation: "A square has four equal sides, so 4 × 5 = 20 cm." },
      { q: "What is 3/4 as a percentage?", options: ["25%", "50%", "75%", "80%"], answer: 2, explanation: "3 divided by 4 is 0.75, which is 75%." },
      { q: "Solve: 15 + 6 ÷ 2", options: ["10.5", "18", "21", "10"], answer: 1, explanation: "Division comes first: 6 ÷ 2 = 3, then 15 + 3 = 18." },
      { q: "What is the next number: 2, 4, 8, 16, ...?", options: ["18", "24", "30", "32"], answer: 3, explanation: "Each number doubles, so the next number is 32." }
    ]
  }
};

const categoryGrid = document.getElementById("category-grid");
const startBtn = document.getElementById("start-btn");
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
let selectedCategory = "";
let currentQuestions = [];
let currentIndex = 0;
let answers = [];
let remainingSeconds = 120;
let timerInterval = null;
let quizFinished = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function bestScoreKey(category) {
  return `quizSparkBest_${category}`;
}

function getBestScore(category) {
  const value = localStorage.getItem(bestScoreKey(category));
  return value === null ? null : Number(value);
}

function updateBestScoreDisplay() {
  const best = selectedCategory ? getBestScore(selectedCategory) : null;
  document.getElementById("home-best").textContent = best === null
    ? "No score yet — take your first quiz!"
    : `${selectedCategory}: ${best}% best score`;
}

function renderCategories() {
  categoryGrid.innerHTML = "";
  Object.entries(quizData).forEach(([name, category]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card" + (name === selectedCategory ? " selected" : "");
    button.setAttribute("aria-pressed", String(name === selectedCategory));
    button.innerHTML = `
      <span class="category-emoji" aria-hidden="true">${category.icon}</span>
      <span><span class="category-name">${name}</span><span class="category-desc">${category.description}</span></span>
      <span class="checkmark">${name === selectedCategory ? "✓" : ""}</span>`;
    button.addEventListener("click", () => {
      selectedCategory = name;
      startBtn.disabled = false;
      renderCategories();
      updateBestScoreDisplay();
    });
    categoryGrid.appendChild(button);
  });
}

function showScreen(screen) {
  [homeScreen, quizScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startQuiz() {
  if (!selectedCategory || quizFinished === false && !homeScreen.classList.contains("hidden")) {
    // A selected category is required; the second part intentionally allows starting fresh attempts.
    if (!selectedCategory) return;
  }
  clearInterval(timerInterval);
  currentQuestions = shuffle(quizData[selectedCategory].questions).map(question => ({ ...question }));
  currentIndex = 0;
  answers = new Array(currentQuestions.length).fill(null);
  remainingSeconds = Number(document.getElementById("duration-select").value);
  quizFinished = false;
  document.getElementById("quiz-category").textContent = selectedCategory;
  showScreen(quizScreen);
  renderQuestion();
  updateTimer();
  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    updateTimer();
    if (remainingSeconds <= 0) finishQuiz(true);
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(Math.max(0, remainingSeconds) / 60);
  const seconds = Math.max(0, remainingSeconds) % 60;
  document.getElementById("time-left").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById("timer").classList.toggle("warning", remainingSeconds <= 15);
}

function renderQuestion() {
  const question = currentQuestions[currentIndex];
  document.getElementById("question-number").textContent = currentIndex + 1;
  document.getElementById("question-total").textContent = currentQuestions.length;
  document.getElementById("question-title").textContent = question.q;
  document.getElementById("progress-bar").style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
  document.getElementById("answered-count").textContent = `${answers.filter(a => a !== null).length} of ${currentQuestions.length} answered`;

  const optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option" + (answers[currentIndex] === index ? " selected" : "");
    button.setAttribute("aria-pressed", String(answers[currentIndex] === index));
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = option;
    button.addEventListener("click", () => {
      answers[currentIndex] = index;
      renderQuestion();
    });
    optionsList.appendChild(button);
  });

  const nextBtn = document.getElementById("next-btn");
  if (currentIndex === currentQuestions.length - 1) {
    nextBtn.textContent = "Submit quiz ✓";
  } else {
    nextBtn.textContent = "Next question →";
  }
}

function finishQuiz(timeExpired = false) {
  if (quizFinished) return;
  quizFinished = true;
  clearInterval(timerInterval);

  const total = currentQuestions.length;
  const attempted = answers.filter(answer => answer !== null).length;
  const correct = currentQuestions.reduce((sum, question, i) => sum + (answers[i] === question.answer ? 1 : 0), 0);
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);
  const previousBest = getBestScore(selectedCategory);
  if (previousBest === null || percentage > previousBest) {
    localStorage.setItem(bestScoreKey(selectedCategory), String(percentage));
  }

  document.getElementById("result-heading").textContent =
    percentage >= 80 ? "Outstanding work!" : percentage >= 50 ? "Good effort!" : "Keep practising!";
  document.getElementById("result-message").textContent = timeExpired
    ? "Time is up! Your quiz was submitted automatically."
    : "Your answers have been submitted. Here's how you did.";
  document.getElementById("result-icon").textContent = percentage >= 80 ? "🏆" : percentage >= 50 ? "★" : "✦";
  document.getElementById("score-percent").textContent = percentage;
  document.getElementById("score-correct").textContent = correct;
  document.getElementById("score-total").textContent = total;
  document.getElementById("stat-total").textContent = total;
  document.getElementById("stat-attempted").textContent = attempted;
  document.getElementById("stat-correct").textContent = correct;
  document.getElementById("stat-incorrect").textContent = incorrect;
  document.getElementById("review-count").textContent = `${total} questions`;
  renderReview();
  updateBestScoreDisplay();
  showScreen(resultScreen);
}

function renderReview() {
  const reviewList = document.getElementById("review-list");
  reviewList.innerHTML = "";
  currentQuestions.forEach((question, index) => {
    const selected = answers[index];
    const isCorrect = selected === question.answer;
    const item = document.createElement("article");
    item.className = "review-item " + (isCorrect ? "correct" : "incorrect");
    const status = selected === null ? "SKIPPED" : isCorrect ? "CORRECT" : "INCORRECT";
    const yourAnswer = selected === null ? "Not answered" : question.options[selected];
    item.innerHTML = `
      <span class="answer-status">${status}</span>
      <div class="review-question">${index + 1}. </div>
      <div class="review-answer"></div>
      <div class="review-answer explanation"></div>`;
    item.querySelector(".review-question").append(document.createTextNode(question.q));
    const answerLine = item.querySelector(".review-answer");
    answerLine.append(document.createTextNode("Your answer: "));
    const yourStrong = document.createElement("strong");
    yourStrong.textContent = yourAnswer;
    answerLine.append(yourStrong, document.createElement("br"), document.createTextNode("Correct answer: "));
    const correctStrong = document.createElement("strong");
    correctStrong.textContent = question.options[question.answer];
    answerLine.append(correctStrong);
    item.querySelector(".explanation").textContent = question.explanation;
    reviewList.appendChild(item);
  });
}

startBtn.addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    finishQuiz(false);
  }
});
document.getElementById("quit-btn").addEventListener("click", () => {
  if (confirm("Leave this quiz? Your current attempt will not be saved.")) {
    clearInterval(timerInterval);
    quizFinished = true;
    renderCategories();
    updateBestScoreDisplay();
    showScreen(homeScreen);
  }
});
document.getElementById("retry-btn").addEventListener("click", startQuiz);
document.getElementById("another-btn").addEventListener("click", () => {
  renderCategories();
  updateBestScoreDisplay();
  showScreen(homeScreen);
});

renderCategories();
