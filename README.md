# Dealbreaker Game - Real time dating application

![Dealbreaker Logo](./src/images/favicon.png | width=100)

A real-time dating app that uses an algorithm to match contestants after answering a blitz of questions before revealing each other’s instagram profile.

**Tech Stack:**

* ReactJS

*Backend:*
* NodeJS (express)
* Socket.IO
* PostgreSQL
* Instagram API (OAuth)

## Problem Statement

The current dating app market is quite polarized:

* either viewed as more serious with convoluted questionnaires and heavy input required at sign-up
* or swipe left/right by very superficial means (and generic conversations that span over days)

But both of these extremes matter, so what's just right?

Dealbreaker. The dating game app.
No excuses anymore! We've got your dealbreakers covered.

## Proposed Solution

A dating app that gives you connection first, with easy effort on the user to start a relevant conversation (at the time you actually feel like having a conversation) but still values your potential importance on physical attraction as well

* Think, HQ Trivia meets The Dating Game show
* Every night at 8:00, jump onto the dealbreaker game where contestants have also joined
* All contestants waiting to play the game are pooled in images at the bottom of the screen, but... they are blurred out
* In real-time, as the clock strikes 8:00, the current game is LOCKED IN and for 5 mins, questions appear with multiple choice answers
* Submit your answer to the question - and when the timer on that question ends - based on your % match, contestants pictures start to clear
* But we still have some questions to go!
* As you reach the end of the game, your top matches will be fully revealed! And you can start a conversation with plenty to talk about (these questions will guarantee that!)

## Primary Dependencies

*This application is built in connection with the client-side server in repo:* [client-side](https://github.com/)

**Note that this application is built using Instagram's API which keeps development in sandbox mode until privacy requirements are approved. In order to run through the game's questions, must trigger the appropriate `preGame()` function on the back-end server.**

Please [Explore the App](#explore-the-app) for a view on how the game runs.

* body-parser 1.19.0
* dotenv 8.0.0
* express 4.17.1
* iocat 0.4.1
* knex 0.17.6
* knex-logger 0.1.0
* morgan 1.7.0
* node-fetch 2.6.0
* pg 6.0.2
* socket.io 2.2.0

To Intall Project
`npm install` to get dependencies
will require .env with Instagram sandbox authorization
`npm start` to start the project on local machine.

## Explore the App

