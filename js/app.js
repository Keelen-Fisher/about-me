'use strict';

console.log('Checking the console');


let userWelcome = prompt('Hello! What is your name?')
alert(`Glad to have you here ${userWelcome}! Let\'s play a guesing game!`)



let firstQuestion = prompt('Am I a personal trainer? Yes or No: ').toLowerCase();
if(firstQuestion === 'y' || firstQuestion === 'yes')
{
  alert(`That\'s right ${userWelcome}!! Look at you go!!`);
}

else if(firstQuestion === 'n' || firstQuestion === 'no')
{
  alert(`Dang ${userWelcome}!! You got that one wrong, but you\'ve got 4 more!`);
}

else{
  alert(`Incorrect input!! Only Yes or No.`)
}


let secondQuestion = prompt('I used to be an Environmental Scientist before I became a Software Developer. Is this true? Yes or No').toLowerCase();
if(secondQuestion === 'y' || secondQuestion === 'yes')
{
  alert(`Okay ${userWelcome}!! That is correct. Nice!!`);
}

else if(secondQuestion === 'n' || secondQuestion === 'no')
{
  alert(`That's acutally wrong ${userWelcome}, that was a difficult one though!`);
}

else{
  alert(`Incorrect input!! Only Yes or No.`)
}



let thirdQuestion = prompt('I am HEAVILY into Soccer, go Arsenal!! Is this true? Yes or No').toLowerCase();
if(thirdQuestion === 'y' || thirdQuestion === 'yes')
{
alert(`That\'s....... not true!! The true answer is boxing!`);

}

else if(thirdQuestion === 'n' || thirdQuestion === 'no')
{
alert(`That\'s right!! The true answer is boxing!`);

}

else{
  alert(`Incorrect input!! Only Yes or No.`)
}


let fourthQuestion = prompt('I am currently from Houston Texas, dream city to work remotely is Austin. Is this true? Yes or No ').toLowerCase();
if(fourthQuestion === 'y' || fourthQuestion === 'yes')
{
  alert(`That's right! Austin is lovely, and that\'s the goal!`);
}

else if(fourthQuestion === 'n' || fourthQuestion === 'no')
{
alert(`That's incorrect! I\'m Born and raised in Houston Texas. `);
}

else{
  alert(`Incorrect input!! Only Yes or No.`)
}


let fifthQuestion = prompt('Okay, last one! I have trained for marathons and obstacle course races. Is this true? Yes or No ').toLowerCase();
if(fifthQuestion === 'y' || fifthQuestion === 'yes')
{
  alert(`That's right! Wasn't easy, but also fun!! `);
}

else if(fifthQuestion === 'n' || fifthQuestion === 'no')
{
  alert(`Unfortunately, thats wrong! `);
}

else{
  alert(`Incorrect input!! Only Yes or No.`)
}

alert(`Welcome to my page about me, ${userWelcome}!` );