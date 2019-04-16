
let resultParas = document.querySelector('.resultParas');
let lowOrHigh = document.querySelector('.lowOrHigh');
let guesses = document.querySelector('.guesses');

let randomNumber = Math.floor(Math.random() * 100 + 1);
let guessField= document.querySelector(".guess-field");
let guessSubmit = document.querySelector(".submit-guess");
let reset = document.querySelector(".reset");

let guessCount = 1;

function checkGuess() {
     
    let userGuess= Number(guessField.value);

    if (guessCount === 1){
    }
        guesses.innerText = "You have made "+ guessCount + " guesses so far! \n \n Have another go." ;          
    
    if(userGuess == randomNumber){
        lowOrHigh.innerText="CONGRATULATIONS! you got it right";
        }
        else if(userGuess < randomNumber)
         {
        lowOrHigh.innerText=" Your Guess is too low.";  
          
        }else{
        lowOrHigh.innerText=" Your Guess is too high.";
         }

    if (userGuess === randomNumber){
        resultParas.style.backgroundColor="green";
        resultParas.style.color="white";
        guesses.innerText="Correct Number is " +""+  userGuess +" . " 
        
      }
       else if((userGuess>(randomNumber - 10)) & (userGuess <(randomNumber + 10)))
     { 
         resultParas.style.backgroundColor="#f4a460";
      } 
      else if ((userGuess > (randomNumber-30))& (userGuess <(randomNumber + 30)))
      {
        resultParas.style.backgroundColor="#afeeee";
        resultParas.style.color="black";
      }else {
         resultParas.style.backgroundColor="white";
         resultParas.style.color="black";
      }  
    guessCount ++;
    guessField.value= " ";
    guessField.focus();
    }
 // event handling
 guessSubmit.addEventListener("click", checkGuess);
 reset.addEventListener("click",resetGame);

  // reset setting
function resetGame() {
    guessCount = 1;
    
    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';

    }
    resultParas.style.backgroundColor="white";
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
   }