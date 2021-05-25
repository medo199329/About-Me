'use strict';

let score = 0;

   let userName = prompt(' What is your name?');
    alert('well ' + userName + 'lets see how much you know me?');
    
  
    let userQOne = prompt('am i smart?').toLowerCase();

  if (userQOne === 'yes' || userQOne === 'y') {
    alert('you bet i am');
  } else if (userQOne === 'no' || userQOne === 'n') {
    alert('thats not nice.');
    score++;
  } else {
    alert('sorry you should say yes to get score.');
    score-5;
  }



  let userQtwo= prompt('do I love animals?').toLowerCase();

  if (userQtwo === 'no' || userQtwo=== 'n') {
    alert('thats right but I dont mind petting a cat.');
  } else if (userQtwo=== 'yes' || userQtwo=== 'y') {
    alert('not entirly false');
    Score++;
  } else {
    alert('again it should be yes or no');
    score-5;
  }

      let userQthree = prompt('Mohammed has no siblings').toLowerCase();

  if (userQthree === 'no' || userQthree === 'n') {
    alert('Nah,i has 3 siblings.');
  } else if (userQthree === 'yes' || userQthree === 'y') {
    alert(' correct,nice one');
    Score++;
  } else {
    alert('do i have to tell you every time its yes or no ');
  }


  let userQfour = prompt('i am an English major').toLowerCase();

  if (userQfour === 'yes' || userQfour === 'y') {
    alert('correct, you deserve a treat ');
  } else if (userQfour === 'no' || userQfour === 'n') {
    alert('oops! Not your day ');
    Score-100;
  } else {
    alert('i said it million times yes or no');
  }



  let userQfifth = prompt('am I at a jop right now ').toLowerCase();

  if (userQfifth === 'yes' || userQfifth === 'y') {
    alert('really not your day');
  } else if (userQfifth === 'no' || fifthAnswer === 'n') {
    alert('Very good');
    totalScore++;
  } else {
    alert('plz I am done with you');
  }





