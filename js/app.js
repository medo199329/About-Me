'use strict';

let score = 0;

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

      let userQthree = prompt('Mohammed has no siblings')

      userQthree = userQthree.toLowerCase()


  if (userQthree === 'no' || userQthree === 'n') {
    alert('Nah,i has 3 siblings.');
  } else if (userQthree === 'yes' || userQthree === 'y') {
    alert(' correct,nice one');
    Score++;
  } else {
    alert('do i have to tell you every time its yes or no ');
  }


  let userQfour = prompt('i am an English major')
  userQfour = userQfour.toLowerCase()


  if (userQfour === 'yes' || userQfour === 'y') {
    alert('correct, you deserve a treat ');
  } else if (userQfour === 'no' || userQfour === 'n') {
    alert('oops! Not your day ');
    Score-100;
  } else {
    alert('i said it million times yes or no');
    console.log('i think you know me a little');
  }



  let userQfifth = prompt('am I at a jop right now ')
  userQfifth = userQfifth.toLowerCase()


  if (userQfifth === 'yes' || userQfifth === 'y') {
    alert('really not your day');
  } else if (userQfifth === 'no' || userQfifth === 'n') {
    alert('Very good');
    totalScore++;
  } else {
    alert('plz I am done with you');
  } 


// numbers game 

let userName = prompt(' What is your name?');

let guess = prompt('pick a number from 1 - 100');

let rightNumber = 27

alert('you will have only 4 chances to guess what number i am thinking about from 1 to 100 ' + userName + 'ok');


for( let i = 0 ; i <= 3 ; i++ ){
    let guess = prompt ((i+1) + 'how much'+userName)
}



if(guess === rightNumber){
alert('you are correct')
}else alert('good luck next time')
 
