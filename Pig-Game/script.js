'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const players = 1; // they are 2 players

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
const rolling = function () {
  // 1.Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to next player
    switchPlayer();
  }
};
const winner = function () {
  if (score[activePlayer] > 20) {
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    btnRoll.removeEventListener('click', rolling);
    btnHold.removeEventListener('click', holding);
  }
};

const holding = function () {
  //1.Add current score to active player's score
  score[activePlayer] += currentScore;
  // score[1] = score[1] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  //2.Check if player's score is >= 100
  winner();
  // Finish the game
  switchPlayer();
};

const newGame = function () {
  //removing the background for winner
  switchPlayer();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  switchPlayer();

  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;

  score0El.textContent = 0;
  score1El.textContent = 0;

  // restarting the score

  btnRoll.addEventListener('click', rolling);
  btnHold.addEventListener('click', holding);

  score[activePlayer] = 0;
  switchPlayer();
  score[activePlayer] = 0;
};
btnRoll.addEventListener('click', rolling);

btnHold.addEventListener('click', holding);

btnNew.addEventListener('click', newGame);
