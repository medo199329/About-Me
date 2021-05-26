'use strict';

let score = 0;
function q1() {
  let userName = prompt(' What is your name?');
  alert('well ' + userName + 'lets see how much you know me?');


  let userQOne = prompt('am i smart?')

  userQOne = userQOne.toLowerCase()



  if (userQOne === 'yes' || userQOne === 'y') {
    alert('you bet i am');
  } else if (userQOne === 'no' || userQOne === 'n') {
    alert('thats not nice.');
    score++;
  } else {
    alert('sorry you should say yes to get score.');
    score-5;
  }
}
q1() ;


function q2(){
  let userQtwo= prompt('do I love animals?')

  userQtwo = userQtwo.toLowerCase()


  if (userQtwo === 'no' || userQtwo=== 'n') {
    alert('thats right but I dont mind petting a cat.');
  } else if (userQtwo=== 'yes' || userQtwo=== 'y') {
    alert('not entirly false');
    score++;
  } else {
    alert('again it should be yes or no');
    score-5;
  }
}
q2();
function q3(){

  let userQthree = prompt('Mohammed has no siblings')

  userQthree = userQthree.toLowerCase()


  if (userQthree === 'no' || userQthree === 'n') {
    alert('Nah,i has 3 siblings.');
  } else if (userQthree === 'yes' || userQthree === 'y') {
    alert(' correct,nice one');
    score++;
  } else {
    alert('do i have to tell you every time its yes or no ');
  }
}
q3();

function q4(){
  let userQfour = prompt('i am an English major')
  userQfour = userQfour.toLowerCase()


  if (userQfour === 'yes' || userQfour === 'y') {
    alert('correct, you deserve a treat ');
  } else if (userQfour === 'no' || userQfour === 'n') {
    alert('oops! Not your day ');
    score-100;
  } else {
    alert('i said it million times yes or no');
    console.log('i think you know me a little');
  }
}
q4() ;


function q5(){
  let userQfifth = prompt('am I at a jop right now ')
  userQfifth = userQfifth.toLowerCase()


  if (userQfifth === 'yes' || userQfifth === 'y') {
    alert('really not your day');
  } else if (userQfifth === 'no' || userQfifth === 'n') {
    alert('Very good');
   score++;
  } else {
    alert('plz I am done with you');
  }
}
q5();




