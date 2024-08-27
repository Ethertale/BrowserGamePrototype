/*jshint esversion: 6 */
window.addEventListener("load", initialize);

const windowStatsElement = document.querySelector("main .container .window .window-stats");
const locationElement = document.getElementById('location');
const contentElement = document.getElementById('content');
const choicesElement = document.getElementById('choices');
const sideImageElement = document.getElementById('side-image');

const button1Element = document.getElementById('button1');
const button2Element = document.getElementById('button2');
const button3Element = document.getElementById('button3');
const button4Element = document.getElementById('button4');
const button5Element = document.getElementById('button5');

const choice1Element = document.getElementById('choice1');
const choice2Element = document.getElementById('choice2');
const choice3Element = document.getElementById('choice3');
const choice4Element = document.getElementById('choice4');
const choice5Element = document.getElementById('choice5');

let playerHealthCurrent = 100;
let playerHealthMax = 100;
let playerDamageMin = 3;
let playerDamageMax = 7;
const pHealthElement = document.createElement('p');
const pDamageElement = document.createElement('p');


function initialize(){

    pHealthElement.textContent = `Health: ${playerHealthCurrent}/${playerHealthMax}`;
    pDamageElement.textContent = `Damage: ${playerDamageMin}-${playerDamageMax}`;

    windowStatsElement.appendChild(pHealthElement);
    windowStatsElement.appendChild(pDamageElement);

    showAllButtons();
    hideAllChoices();
    clearChoices();

    locationElement.textContent = 'Morrania';
    contentElement.textContent = 'Welcome to the world of Morrania! Let\'s go through a simple tutorial. Click on Button 1 to go to the starting zone.';


    hideAllButtons();
    showButton1();

    button1Element.addEventListener('click', function goToTutorial(){
        this.removeEventListener('click', goToTutorial);
        tutorial();
    });
}

function tutorial(){
    locationElement.textContent = 'Starting Zone';
    contentElement.textContent = 'You arrived at the starting zone! Now click on Button 2 to hurt yourself!';

    hideAllButtons();
    showButton2();

    button2Element.addEventListener('click', function tutorialDoDamageToPlayer (){

        playerHealthCurrent -= 10;
        printAllStats();
        this.removeEventListener('click', tutorialDoDamageToPlayer);
        tutorial2();
    });
}

function tutorial2(){
    locationElement.textContent = 'Starting Zone';
    contentElement.textContent = 'Great! You hurt yourself... Now click Button 3 to heal yourself.';

    hideAllButtons();
    showButton3();

    button3Element.addEventListener('click', function goToTutorial3(){
        playerHealthCurrent = playerHealthMax;
        this.removeEventListener('click', goToTutorial3);
        printAllStats();
        tutorial3();
    });
}

function tutorial3(){
    locationElement.textContent = 'Starting Zone';
    contentElement.textContent = 'Okay now. You\'re back at full health. To end the tutorial, you have 5 buttons. Choose whichever one you want, it will lead you to Wildwatch.';

    showAllButtons();

    button1Element.addEventListener('click', startingZone);
    button2Element.addEventListener('click', startingZone);
    button3Element.addEventListener('click', startingZone);
    button4Element.addEventListener('click', startingZone);
    button5Element.addEventListener('click', startingZone);
}

function startingZone(){
    locationElement.textContent = 'Wildwatch';
    contentElement.textContent = 'Welcome to Wildwatch, adventurer! You arrived in a small village far away from your home. ';
    clearChoices();
    hideAllButtons();

    sideImageElement.style.backgroundImage = 'url("../Images/wildwatch.jpg")';

    showChoice1();
    showButton1();
    choice1Element.textContent = '1. Speak to a guard.';
    showChoice2();
    showButton2();
    choice2Element.textContent = '2. Look around.';


    button1Element.addEventListener('click', function goToStartingZoneGuardDialogue(){
        this.removeEventListener('click', goToStartingZoneGuardDialogue);
        startingZoneGuardDialogue();
    });
    button2Element.addEventListener('click', startingZoneLookAround);
    button3Element.addEventListener('click', startingZone);
    button4Element.addEventListener('click', startingZone);
    button5Element.addEventListener('click', startingZone);
}

function startingZoneGuardDialogue(){
    sideImageElement.style.backgroundImage = 'url("../Images/NPCs/wildwatch-guard.jpg")';
    contentElement.textContent = '"Hello, adventurer, and welcome to Wildwatch. How can I help you?"';


}
function startingZoneLookAround(){
    contentElement.textContent = 'You look around and see a vast forest behind the small houses. The guard yaps to the peasants.';
}




function printHealthStats(){
    pHealthElement.textContent = `Health: ${playerHealthCurrent}/${playerHealthMax}`;
}
function printDamageStats(){
    pDamageElement.textContent = `Damage: ${playerDamageMin}-${playerDamageMax}`;
}
function printAllStats(){
    printHealthStats();
    printDamageStats();
}
function showAllButtons(){
    button1Element.className = 'visible';
    button2Element.className = 'visible';
    button3Element.className = 'visible';
    button4Element.className = 'visible';
    button5Element.className = 'visible';
}
function hideAllButtons(){
    button1Element.className = 'hidden';
    button2Element.className = 'hidden';
    button3Element.className = 'hidden';
    button4Element.className = 'hidden';
    button5Element.className = 'hidden';
}
function showAllChoices(){
    choice1Element.className = 'visible';
    choice2Element.className = 'visible';
    choice3Element.className = 'visible';
    choice4Element.className = 'visible';
    choice5Element.className = 'visible';
}
function hideAllChoices(){
    choice1Element.className = 'hidden';
    choice2Element.className = 'hidden';
    choice3Element.className = 'hidden';
    choice4Element.className = 'hidden';
    choice5Element.className = 'hidden';
}
function clearChoices(){
    choice1Element.textContent = '';
    choice2Element.textContent = '';
    choice3Element.textContent = '';
    choice4Element.textContent = '';
    choice5Element.textContent = '';
}
function showChoice1(){
    choice1Element.className = 'visible';
}
function showChoice2(){
    choice2Element.className = 'visible';
}
function showChoice3(){
    choice3Element.className = 'visible';
}
function showChoice4(){
    choice4Element.className = 'visible';
}
function showChoice5(){
    choice5Element.className = 'visible';
}
function showButton1(){
    button1Element.className = 'visible';
}
function showButton2(){
    button2Element.className = 'visible';
}
function showButton3(){
    button3Element.className = 'visible';
}
function showButton4(){
    button5Element.className = 'visible';
}
function showButton5(){
    button5Element.className = 'visible';
}
