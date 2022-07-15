'use strict';

alert('Checking the console');
// Keepeing score:
let score = 0;

let userWelcome = prompt('Hello! What is your name?')
// Creating First Function
function questionOne()
{
  //  Creating an alert: template literal using the back ticks (``)
  alert(`Glad to have you here ${userWelcome}! Let\'s play a guesing game!`)


  //  Breaking this line of code down: using the prompt, you now have a method attached (.toLowerCase) 
  let firstQuestion = prompt('Am I a personal trainer? Yes or No: ').toLowerCase();

  // IF/ElSE Statement: the information inside of the parenthesis is the condition.
  if(firstQuestion === 'y' || firstQuestion === 'yes')
  {
    alert(`That\'s right ${userWelcome}!! Look at you go!!`);
    score++
  }

  // When you use an else if statement, you have to enter a condition inside of a pair of parenthesis.
  else if(firstQuestion === 'n' || firstQuestion === 'no')
  {
    alert(`Dang ${userWelcome}!! You got that one wrong, but you\'ve got 4 more!`);
  } 

  else
  {
    alert(`Incorrect input!! Only Yes or No.`)
  }
}
questionOne();


// Creating Second Function
function questionTwo(){
  let secondQuestion = prompt('I used to be an Environmental Scientist before I became a Software Developer. Is this true? Yes or No').toLowerCase();
  if(secondQuestion === 'y' || secondQuestion === 'yes')
  {
    alert(`Okay ${userWelcome}!! That is correct. Nice!!`);
    score++
  }

  else if(secondQuestion === 'n' || secondQuestion === 'no')
  {
    alert(`That's acutally wrong ${userWelcome}, that was a difficult one though!`);
  }

  else{
    alert(`Incorrect input!! Only Yes or No.`)
  }
}
questionTwo();


// Creating Third Function
function questionThree()
{
  let thirdQuestion = prompt('I am HEAVILY into Soccer, go Arsenal!! Is this true? Yes or No').toLowerCase();
  if(thirdQuestion === 'y' || thirdQuestion === 'yes')

    {
      alert(`That\'s....... not true!! The true answer is boxing!`);
    }

    else if(thirdQuestion === 'n' || thirdQuestion === 'no')
    {
      alert(`That\'s right!! The true answer is boxing!`);
      score++
    }

    else
    {
      alert(`Incorrect input!! Only Yes or No.`)
    }
}
questionThree();


function questionFour()
{
  let fourthQuestion = prompt('I am currently from Houston Texas, dream city to work remotely is Austin. Is this true? Yes or No ').toLowerCase();
  if(fourthQuestion === 'y' || fourthQuestion === 'yes')
  {
    alert(`That's right! Austin is lovely, and that\'s the goal!`);
    score++
  }

  else if(fourthQuestion === 'n' || fourthQuestion === 'no')
    {
    alert(`That's incorrect! I\'m Born and raised in Houston Texas. `);
    }

  else
    {
    alert(`Incorrect input!! Only Yes or No.`)
    }
}
questionFour();

function questionFive(){
let fifthQuestion = prompt('Okay! I have trained for marathons and obstacle course races. Is this true? Yes or No ').toLowerCase();
if(fifthQuestion === 'y' || fifthQuestion === 'yes')
{
  alert(`That's right! Wasn't easy, but also fun!! `);
  score++
}

else if(fifthQuestion === 'n' || fifthQuestion === 'no')
{
  alert(`Unfortunately, thats wrong! `);
}

else{
  alert(`Incorrect input!! Only Yes or No.`)
}
}
questionFive();
alert(`Welcome to my page about me, ${userWelcome}!` );

// 6th question being a loop


let numTry = 4;
let correctNumber = '12';
let correctAnswerTrueOrFalse = false;

while(numTry && !correctAnswerTrueOrFalse){
  let correctAnswer = prompt(`Alright ${userWelcome}, let\'s play a guessing game!! Guess my favorite number? Between 1-20  `);
  numTry--;

  if (correctAnswer === correctNumber){
    alert('CORRECT!!! It is 12, great job!! let us move on.')
     correctAnswerTrueOrFalse = true;
     score++
  }else{
    alert('Sorry, that is wrong!! Try again');
  }
}

alert(`The correct number is 12, let\'s keep going ${userWelcome}!!`)

// This code was made with the help of Tim Taylor, TA Aaron Imbrock, and TA Tammy Do

// 7th question

let numAttempt = 6;
let correctRapper = ['kendrick', 'drake', 'j', 'nas', 'noname', 'lauryn', 'kanye', 'outkast', 'jid', 'bun'];
console.log(correctRapper.length);
let correctRapperTandF = false;

for (let i=0; i < correctRapper.length; i++){
  console.log(correctRapper[i]);
}
let correctAnswer2;

while (numAttempt && !correctRapperTandF) {
  console.log(correctRapperTandF);
  correctAnswer2 = prompt('I love rap music, and I have a top 10 rappers list like many others do. Can you guess one of my favorite rappers of all time? You have SIX attempts this time! Hint: ONLY use their first name for input.').toLowerCase();
  console.log(correctAnswer2);
  correctRapperTandF = true;

  numAttempt--;

    
  
      if (correctAnswer2 === correctRapper[0]) {
        alert('How did you get that?? Are you some mind reader?? You are correct, that is one of them. ')
        correctRapperTandF = true;
        score++
      } else {
        alert('Sorry, that is wrong!! Try again');
}
    }
  
     alert('Well you worked this hard to learn more about me, here\'s the full list of my fave rapppers:')
     for (let i=0; i < correctRapper.length; i++){
      alert(correctRapper[i]);
  }
console.log('exited the while loop');
  

alert('Here\'s your score!! '+  score  + '/7. Thank you for playing!! ');
// This code was made with the help of Tim Taylor, TA Aaron Imbrock, and TA Tammy Do

