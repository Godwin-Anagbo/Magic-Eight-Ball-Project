let userName = 'Jane';
userName ? console.log(`Hello ${userName}!`)
: console.log('Hello!')

let userQuestion = 'Will I grow tall?';
userName === 'Jane' ? console.log(`${userName} asked the question: '${userQuestion}'`)
: console.log(`The User asked the question: '${userQuestion}'`)

let randomNumber = Math.floor(Math.random() * 8);
console.log(`The random number generated is: ${randomNumber}`);
let eightBall = '';

//Switch Statement Approach

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    console.log(`The eight ball answered: ${eightBall}`)
    break;
  case 1:
    eightBall = 'It is decidedly so';
    console.log(`The eight ball answered: ${eightBall}`)
    break;  
  case 2:
    eightBall = 'Reply hazy try again';
    console.log(`The eight ball answered: ${eightBall}`)
    break; 
  case 3:
    eightBall = 'Cannot predict now';
    console.log(`The eight ball answered: ${eightBall}`)
    break; 
  case 4:
    eightBall = 'Do not count on it';
    console.log(`The eight ball answered: ${eightBall}`)
    break; 
  case 5:
    eightBall = 'My sources say no';
    console.log(`The eight ball answered: ${eightBall}`)
    break; 
  case 6:
    eightBall = 'Outlook not so good';
    console.log(`The eight ball answered: ${eightBall}`)
    break;  
  case 7:
    eightBall = 'Signs point to yes';
    console.log(`The eight ball answered: ${eightBall}`)
    break; 
  default:
    eightBall = 'You are special';
    console.log(`The eight ball answered: ${eightBall}`)
    break; 
}


// if/else if/ else Statements Approach

if (randomNumber === 0 ){
  eightBall = 'It is certain'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 5) {
  eightBall = 'My sources say no'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good'
  console.log(`The eight ball answered: ${eightBall}`)
} else if (randomNumber === 7) {
  eightBall === 'Signs point to yes'
  console.log(`The eight ball answered: ${eightBall}`)
} else {
  eightBall = 'You are special'
  console.log(`The eight ball answered: ${eightBall}`)
}