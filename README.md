# Quiz-Application

Description
This project is a simple quiz application built using React. The application presents multiple-choice questions, a timer, and a money pyramid system. It mimics a game-show-style quiz where users can answer questions, win virtual money, and view animations on winning. The project includes features such as pausing the game, handling wrong answers, and showing congratulatory messages with balloon animations upon winning.

Features
Timer: A countdown timer for each question, which stops when time runs out or an answer is selected.
Pause and Resume: The game can be paused and resumed using a button.
Dynamic Questioning: The app handles multiple questions, displaying them sequentially.
Money Pyramid: The money pyramid updates dynamically as the player progresses.
Answer Feedback: Immediate feedback is provided if the answer is correct or wrong.
Win Screen: A congratulatory screen with animated balloons is displayed when the user wins the game.
Game Over: The game ends when time runs out or an incorrect answer is selected.
Components
App.js
This is the main component that holds the game state. Key states include:

questionNumber: Tracks the current question number.
stopTime: Boolean state to stop the timer and end the game.
earned: Stores the amount earned based on the player’s progress.
paused: Boolean state to pause and resume the quiz.
wrongAnswer: Tracks if the user has answered incorrectly.
winner: Boolean state to display the win screen.
timeout: Boolean state for tracking whether the time ran out.
data.js
This file contains an array of quiz questions. Each question object consists of an ID, a question string, and an array of possible answers. Each answer has a text field for the answer option and a correct field to indicate whether the answer is correct or not.

Timer.js
This component controls the countdown timer. If the timer reaches 0, the quiz ends. It accepts props for controlling when the game should stop, pausing the timer, and resetting it for the next question.

Quiz.js
This component renders the quiz questions and handles the selection of answers. It provides feedback to the user, either showing if the answer is correct or ending the game on an incorrect answer.

App.css
The styling for the app, including layouts for the main quiz interface, the money pyramid, and animations for balloons on the win screen.

Installation
Clone the repository:
bash
git clone https://github.com/AdenijiAbraham/Quiz-Application
Navigate to the project directory:
bash
cd quiz-app
Install dependencies:
bash
npm install
Run the app:
bash

npm start

Usage
Answer each question before the timer runs out.
You can pause the game using the "Pause" button and resume later.
If you answer all questions correctly, you win virtual money and balloons will appear on the screen.
If you select a wrong answer or time runs out, the game will end.
