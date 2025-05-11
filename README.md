# TurboQuiz

TurboQuiz is a web-based quiz app that helps you learn through repetition and smart review. Each question is randomly chosen and wrong answers are placed in a retry queue, making sure you study what you miss.

## 🎯 Features

- Randomized multiple-choice questions.
- Smart retry system for wrong answers (spaced repetition-style).
- Real-time feedback for each answer.
- Tracks score and number of questions studied.
- Displays final result with percentage score.
- Option to restart the quiz.

## 📁 Project Structure

```

/your-project/
│
├── index.html               # Main HTML page
├── data.js                  # Quiz questions and answers
├── script.js                # Main JavaScript logic
└── themes/
└── styles\_academia.css  # Dark academia-themed CSS file

````

## 🚀 How to Use

1. Clone or download the project.
2. Make sure you have a valid `data.js` file structured like this:

```js
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris"
  },
  // more questions...
];
````

3. Open `index.html` in your browser.
4. Start answering questions!

## 💡 How the Retry System Works

* If you get a question wrong, it gets added to a retry queue.
* That question will reappear after 5 more questions.
* This helps reinforce learning by reviewing mistakes.

## 🎨 Theme

The app uses a **dark academia** visual theme located in `themes/styles_academia.css`. You can replace or modify this file to create other styles.

## 🛠️ Customization Tips

* Add more questions to `data.js`.
* Create new themes in the `themes/` folder and change the link in `index.html`.
* Tweak the retry delay (`RETRY_AFTER`) inside `script.js`.

## 📄 License

Feel free to use, modify, and share — just give credit if you publish it!

---

Made with ☕ and curiosity.


