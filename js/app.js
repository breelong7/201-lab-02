'use strict';

alert('Gasp! You have somehow stumbled upon an ancient webpage where the most powerful genie lies in wait! Answer 5 yes or no questions about Breenie the Genie, and she will grant any wish you can dream of. Good luck!');

var dogsRule = prompt('Does Breenie prefer dogs over cats?');
dogsRule = dogsRule.toLowerCase();
console.log('Does Breenie prefer dogs? ' + dogsRule);

if(dogsRule ==='yes' || dogsRule === 'y'){
  alert('Correct! That was an easy one. All powerful genies prefer dogs.');
} else{
  alert('Incorrect! genies love dogs. Since Breenie is a merciful genie, she will allow you to continue');
}

var isPsychic = prompt('Can Breenie see the future?');
isPsychic = isPsychic.toLowerCase();
console.log('Is Breenie psychic? ' + isPsychic);

if(isPsychic === 'yes' || isPsychic === 'y'){
  alert('Correct! Congrats to you for graduating Code 201 in October!');
} else{
  alert('That is not correct. Since Breenie has been stuck in the lamp for thousands of years with nobody to talk to, she will give you another chance.');
}

var likesBeach = prompt('Does Breenie prefer a warm sunny beach over a snowy mountain?');
likesBeach = likesBeach.toLowerCase();
console.log('Does Breenie like the beach? ' + likesBeach);

if(likesBeach === 'yes' || likesBeach === 'y'){
  alert('That\'s correct! You are well on your way to having a wish granted.');
} else{
  alert('Incorrect! It\'s almost as if you don\'t want a wish granted!');
}

var likesFroyo = prompt('Does our almighty genie love froyo aka frozen yogurt?');
likesFroyo = likesFroyo.toLowerCase();
console.log('Does Breenie like froyo? ' + likesFroyo);

if(likesFroyo === 'yes' || likesFroyo === 'y'){
  alert('Another correct answer!');
} else{
  alert('Sorry, that\'s wrong. I mean, who doesn\'t like froyo?');
}

var likesExplore = prompt('Does Breenie prefer napping over exploring?');
likesExplore = likesExplore.toLowerCase();
console.log('Does Breenie like to explore? ' + likesExplore);

if(likesExplore === 'no' || likesExplore === 'n'){
  alert('That\'s correct my friend!');
} else{
  alert('Incorrect! Breenie is stuck in a lamp the majority of the time. She prefers to explore!');
}
