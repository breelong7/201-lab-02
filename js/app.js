'use strict';

alert('Hey you! Glad you finally made it to my page! In here you will learn some facts about me and play a fun guessing game. Make sure you answer either yes, y, no, or n. Let\'s get started!');

var userName = prompt('Tell me, what is your name?');
var myQuestions = ['Do you think I like dogs?', 'Do you think I enjoy watching sports?', 'Do you think I prefer the beach over a snowy mountain?', 'I\'ve always had a major sweet tooth. Do you think my favorite dessert is frozen yogurt?', 'Does Bree prefer napping over exploring?'];
var myAnswersA = ['y', 'y', 'y', 'y', 'n'];
var myAnswersB = ['yes', 'yes', 'yes','yes', 'no'];
// var userAnswer = [];
var promptResponse = [];
var correctAnswerCount = 0;

//Loop through all questions in myQuestions[]
for(var i = 0; i < myQuestions.length; i++){
  //Prompt user with myQuestions questions
  // var promptResponse = prompt(myQuestions[i]);
  promptResponse[i] = prompt(myQuestions[i]);
  promptResponse[i] = promptResponse[i].toLowerCase();
  console.log('User answer ' + promptResponse[i]);

  if(promptResponse[i] === myAnswersA[i] || promptResponse[i] === myAnswersB[i]){
    alert(userName + ', you got it!');
    correctAnswerCount++;

  } else {
    alert('That is incorrect');
  }
  console.log('Correct answer count ' + correctAnswerCount);
}

//Favorite number
for(var q = 0; q < 4; q++) {
  var favNumber = prompt('What is my favorite number?');
  console.log('What is Bree\'s favorite number?' + favNumber);
  favNumber = parseInt(favNumber);
  if(favNumber === 13) {
    alert('Correct! ');
    correctAnswerCount++;
    break;
  } else if(favNumber < 13) {
    alert('Wrong! Too low');
  } else if (favNumber > 13) {
    alert('Incorrect! Too high');
  }
}

// var countSports = 0;
var sports = ['kickball', 'softball', 'volleyball', 'dodgeball'];

alert('Okay, here\'s the real test. I\'ll give you 6 attempts to guess at least one sport I have played. Ready, go!');

//Up to 6 attempts
for(var r = 0; r < 6; r++) {
  //prompt, normalize, compare
  //alert
  var sportGuess = prompt('What sport do you think I\'ve played?');
  console.log('guess sports value - ' + sportGuess);
  sportGuess = sportGuess.toLowerCase();
  var isCorrect = false;
  //For each sport in the sport array
  //s starts at 0 and represents the first index in the sports array
  for(var s = 0; s < sports.length; s++){
    console.log('attempt ' + (s+1));
    console.log('Correct answer: ' + sports[s]);
    if(sportGuess === sports[s]){
      isCorrect = true;
    }
  }
  if(isCorrect) {
    alert('That\'s correct!');
    correctAnswerCount++;
    break;
  } else {
    alert('Try again.');
  }
}

alert('Your score is ' + correctAnswerCount + 'out of 7.');
