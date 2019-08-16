'use strict';

alert('Hey you! Glad you finally made it to my page! In here you will learn some facts about me and play a fun guessing game. Make sure you answer either yes, y, no, or n. Let\'s get started!');

var userName = prompt('Tell me, what is your name?');

var dogsRule = prompt(userName + ', do you think I like dogs?');
dogsRule = dogsRule.toLowerCase();
console.log('Does Bree prefer dogs? ' + dogsRule);

// add counter

if(dogsRule ==='yes' || dogsRule === 'y'){
  alert('Correct! That was an easy one.');
} else{
  alert('Incorrect! Sorry ' + userName + ', better luck next time.');
}

var likesSports = prompt('Do you think I enjoy watching sports?');
likesSports = likesSports.toLowerCase();
console.log('Does Bree like sports? ' + likesSports);

if(likesSports === 'yes' || likesSports === 'y'){
  alert('Correct! I\'m a fan of Seattle Sounders and Seahawks! If only CenturyLink would lower their prices.');
} else{
  alert('That is not correct.');
}

var likesBeach = prompt('Do you think I prefer the beach over a snowy mountain?');
likesBeach = likesBeach.toLowerCase();
console.log('Does Bree like the beach? ' + likesBeach);

if(likesBeach === 'yes' || likesBeach === 'y'){
  alert('That\'s correct! Nothing better than the sun, ocean breeze, and a margarita');
} else{
  alert('Sorry, wrong! Although I do like making snow angels, I\'d much rather be sunbathing.');
}

var likesFroyo = prompt('I\'ve always had a major sweet tooth. Do you think my favorite dessert is frozen yogurt?');
likesFroyo = likesFroyo.toLowerCase();
console.log('Does Bree like froyo? ' + likesFroyo);

if(likesFroyo === 'yes' || likesFroyo === 'y'){
  alert('100% Correct! My favorite flavor is cotton candy.');
} else{
  alert('Sorry, that\'s wrong. I mean, who doesn\'t like froyo?');
}

var likesExplore = prompt('Does Bree prefer napping over exploring?');
likesExplore = likesExplore.toLowerCase();
console.log('Does Bree like to nap more than explore? ' + likesExplore);

if(likesExplore === 'no' || likesExplore === 'n'){
  alert('That\'s correct my friend!');
} else{
  alert('Nope! It\'s always adventure time.');
}


var i;
var count = 0;

for(i = 0; i < 4; i++) {
  var favNumber = prompt('What is my favorite number?');
  if(favNumber === '13') {
    alert('Correct! ');
    break;
  } else if(favNumber < 13) {
    count++;
    alert('Wrong! Too low');
  } else if (favNumber > 13) {
    count++;
    alert('Incorrect! Too high');
  }
}

