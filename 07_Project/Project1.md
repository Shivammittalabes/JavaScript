# Project Related to JavaScript

## Project Link:
[Click Here]()

# Solution Code

## Project 1:

```javaScript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'white') {
        body.style.backgroundColor = event.target.id
    }
    if (event.target.id === 'blue') {
        body.style.backgroundColor = event.target.id
    } 
    if (event.target.id === 'yellow') {
        body.style.backgroundColor = event.target.id
    }      
    })    
})
```

## Project 2:

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid ${height}`;
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid ${weight}`;
    } 
    else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)

        //result
        results.innerHTML = `<span>${bmi}</span>`
    }
})
```

## Project 3:

```javascript

const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


```

## Project 4:

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess); 
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number');
    } else if(guess < 1){
        alert('Please Enter a Valid Number more than 1');
    } else if(guess > 100){
        alert('Please Enter a Valid Number less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You Guessed it Right`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage('Number is too Low');
    } else if (guess > randomNumber){
        displayMessage('Number is too High');
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}  `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
    })
}


```

## Project 5: 

```javascript

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startChangingColor = function(){
    
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}


const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)  

document.querySelector('#stop').addEventListener('click', stopChangingColor)  
```

## Project 6:

```javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${e.key === ' ' ? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    </tr>
    
</table>

    </div>
    `
})
```