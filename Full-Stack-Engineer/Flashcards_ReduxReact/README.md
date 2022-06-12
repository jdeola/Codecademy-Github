# Project
Flashcard Quiz app

# Description
Front-end project within the Full-Stack Engineer Path curriculum at the Codecademy.

In this project, I practiced using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over.

# Frameworks/Libraries
* React
* React-Router
* Redux
* React-Redux
* Redux Tool-Kit
* HTML/CSS

# Installation

Run `npm start` in the project root and the app will be available on port 3000.


# Table of Contents
## App
- App.js
- routes.js
- store.js

## Components
- NewQuizForm.js
- NewTopicForm.js

## Features
- Topics
  - Topic.js
  - Topics.js
  - topicSlice.js
- Quizzes
  - Quiz.js
  - Quizzes.js
  - quizzesSlice.js
- Cards
  - Card.js
  - cardsSlice.js

## Routes
- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# Usage
Users may create quizzes for various topics to be displayed in a flashcard style to help study and learn.

# Notes
Will be forking this in future to implement a back-end with Supabase