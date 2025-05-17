document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quiz-form");
  const resultDiv = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");
  const seeResultButton = document.getElementById("see-result-btn");
  let currentQuestionIndex = -1;
  let score = 0;
  let answeredQuestions = 0;
  let usedQuestions = new Set();

  // Queue to track wrong questions and when they should reappear
  let wrongQuestionsQueue = [];
  const RETRY_AFTER = 5; // Number of questions before retry

  // Timer variables
  const QUIZ_TIME = 20 * 60; // 2 minutes in seconds
  let timeRemaining = QUIZ_TIME;
  let timerInterval;
  let timerDisplay;

  // Initialize timer display
  function initializeTimer() {
    // Remove existing timer if present
    if (timerDisplay) {
      timerDisplay.remove();
    }

    timerDisplay = document.createElement("div");
    timerDisplay.className = "timer-display";
    document
      .querySelector(".quiz-container")
      .insertBefore(timerDisplay, document.querySelector("h1").nextSibling);

    updateTimerDisplay();

    // Start the timer
    timerInterval = setInterval(function () {
      timeRemaining--;
      updateTimerDisplay();

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        endQuiz();
      }
    }, 1000);
  }

  // Update the timer display
  function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `Time Remaining: ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    // Visual warning when time is running low
    if (timeRemaining <= 60) {
      timerDisplay.classList.add("timer-warning");
    } else {
      timerDisplay.classList.remove("timer-warning");
    }
  }

  function addQuestionsStudiedMessage() {
    const totalQuestions = quizData.length;
    const questionsStudiedMessage = document.createElement("div");
    questionsStudiedMessage.className = "questions-studied-message";
    questionsStudiedMessage.textContent = `Total Questions Studied: ${answeredQuestions} out of ${totalQuestions}`;
    resultDiv.appendChild(questionsStudiedMessage);
  }

  function showFeedback(isCorrect, correctAnswer) {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = isCorrect
      ? "feedback-correct"
      : "feedback-incorrect";
    feedbackDiv.textContent = isCorrect
      ? "Correct! ✓"
      : `Incorrect. The correct answer was: ${correctAnswer}`;
    resultDiv.innerHTML = "";
    resultDiv.appendChild(feedbackDiv);

    const scoreDiv = document.createElement("div");
    scoreDiv.className = "current-score";
    scoreDiv.textContent = `Current Score: ${score} out of ${answeredQuestions}`;
    resultDiv.appendChild(scoreDiv);

    addQuestionsStudiedMessage();
  }

  // Function to check if a question from the wrong questions queue should be shown
  function getNextQuestionIndex() {
    // Check if there are any wrong questions due for retry
    if (wrongQuestionsQueue.length > 0) {
      const nextWrongQuestion = wrongQuestionsQueue[0];
      if (nextWrongQuestion.retriesAfter <= answeredQuestions) {
        wrongQuestionsQueue.shift(); // Remove the question from queue
        return nextWrongQuestion.questionIndex;
      }
    }

    // If no wrong questions are due, pick a random unused question
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quizData.length);
    } while (usedQuestions.has(newIndex));

    return newIndex;
  }

  function displayRandomQuestion() {
    quizForm.innerHTML = "";
    resultDiv.innerHTML = "";

    // Reset used questions if all have been used
    if (
      usedQuestions.size === quizData.length &&
      wrongQuestionsQueue.length === 0
    ) {
      usedQuestions.clear();
    }

    currentQuestionIndex = getNextQuestionIndex();
    const question = quizData[currentQuestionIndex];

    // Add question text
    const questionText = document.createElement("p");
    questionText.className = "question";
    questionText.textContent = `Question ${answeredQuestions + 1}: ${
      question.question
    }`;
    quizForm.appendChild(questionText);

    // Add options
    question.options.forEach((option) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "question";
      input.value = option;

      input.addEventListener("change", () => {
        const isCorrect = option === question.answer;
        if (isCorrect) {
          score++;
          usedQuestions.add(currentQuestionIndex);
        } else {
          // Add incorrect question to retry queue
          wrongQuestionsQueue.push({
            questionIndex: currentQuestionIndex,
            retriesAfter: answeredQuestions + RETRY_AFTER,
          });
        }

        answeredQuestions++;
        showFeedback(isCorrect, question.answer);
        nextButton.disabled = false;

        // Disable all radio buttons after selection
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
          radio.disabled = true;
        });

        // Show final results button if all questions are answered correctly
        if (
          usedQuestions.size === quizData.length &&
          wrongQuestionsQueue.length === 0
        ) {
          nextButton.style.display = "none";
          seeResultButton.style.display = "inline-block";
        }
      });

      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      quizForm.appendChild(label);
    });

    nextButton.style.display = "inline-block";
    seeResultButton.style.display = "none";
    nextButton.disabled = true;
  }

  // End quiz when time runs out
  function endQuiz() {
    // Clear form and disable inputs
    quizForm.innerHTML = "";
    nextButton.style.display = "none";
    seeResultButton.style.display = "none";

    // Show final results
    resultDiv.innerHTML = `
            <div class="final-result">
                Time's Up!<br>
                Final Score: ${score} out of ${answeredQuestions}!<br>
                ${
                  answeredQuestions > 0
                    ? `(${Math.round((score / answeredQuestions) * 100)}%)`
                    : ""
                }
            </div>
        `;

    addQuestionsStudiedMessage();

    // Add restart button
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.addEventListener("click", function () {
      score = 0;
      answeredQuestions = 0;
      usedQuestions.clear();
      wrongQuestionsQueue = [];
      timeRemaining = QUIZ_TIME;

      // Stop the existing timer before starting a new one
      clearInterval(timerInterval);

      // Clear the result div
      resultDiv.textContent = "";

      // Restart timer and display first question
      initializeTimer();
      displayRandomQuestion();
    });
    resultDiv.appendChild(restartButton);
  }

  // Initialize quiz
  initializeTimer();
  displayRandomQuestion();

  nextButton.addEventListener("click", function () {
    displayRandomQuestion();
  });

  seeResultButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    endQuiz();
  });
});
