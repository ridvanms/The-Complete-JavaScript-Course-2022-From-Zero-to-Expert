'use strict';

// console.log(document.querySelector('.message'));

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.message').textContent = 'guess number...';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'There is no value';
  }
  // when user win
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✔ Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number ').style.width = '30rem';
    document.querySelector('.number').textContent = guess;

    if (score > hightScore) {
      document.querySelector('.highscore').textContent = hightScore = score;
    }
  } else if (score > 1) {
    if (guess !== secretNumber) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🐱‍🏍too hight' : '👀 too low';
      score--;
    }
  }
  document.querySelector('.score').textContent = score;

  // when score droped down to zero
  if (score === 0) {
    document.querySelector('.message').textContent = 'You loos the game🧨';
  }
  if (score == 0 || guess === secretNumber) {
    document.querySelector('.check').remove;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
