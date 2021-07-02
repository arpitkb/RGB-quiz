let resColor, colorbtn1, colorbtn2, colorbtn3, colorbtn4, colorbtn5, scoreTotal = 0;

let wrongScreen, rgbValue, score, isGameOver, resBox, correctBox;


function getElements() {
    colorbtn1 = document.querySelector('#color1')
    colorbtn2 = document.querySelector('#color2')
    colorbtn3 = document.querySelector('#color3')
    colorbtn4 = document.querySelector('#color4')
    colorbtn5 = document.querySelector('#color5')
    wrongScreen = document.querySelector('#wrong-screen')
    rgbValue = document.querySelector('#rgbValue')
    score = document.querySelector('#score')
    correctBox = document.querySelector('#correct-box')
}


function colorGen() {
    const a = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    const c = Math.floor(Math.random() * 255) + 1;
    let newC = `rgb(${a}, ${b}, ${c})`;
    return newC;
}

function genBoxNumber() {
    let int = Math.floor(Math.random() * 5) + 1;
    if (int === 1) return colorbtn1;
    if (int === 2) return colorbtn2;
    if (int === 3) return colorbtn3;
    if (int === 4) return colorbtn4;
    if (int === 5) return colorbtn5;
}

function generateColor() {
    let color1 = colorGen();
    let color2 = colorGen();
    let color3 = colorGen();
    let color4 = colorGen();
    let color5 = colorGen();
    resBox = genBoxNumber();
    console.log(resBox.getAttribute('id'))
    colorbtn1.style.background = color1;
    colorbtn2.style.background = color2;
    colorbtn3.style.background = color3;
    colorbtn4.style.background = color4;
    colorbtn5.style.background = color5;
    resColor = resBox.style.background;
    changeRgbUi();


}

function isCorrect(box) {
    let tempcolor = box.style.background
    if (tempcolor == resColor) return true;
    return false;
}

function setEvents() {
    const boxAll = document.querySelectorAll('.color');

    for (let box of boxAll) {
        box.addEventListener('click', () => {
            if (isCorrect(box)) {
                scoreTotal++;
                changeScoreUi();
                generateColor();
            }
            else return GameOver();
        })
    }

    wrongScreen.querySelector('button').addEventListener('click', () => {
        wrongScreen.style.display = 'none';
        playAgain();
    })


}
function resetScore() {
    scoreTotal = 0;
    changeScoreUi();
}


function playAgain() {
    resetScore();
    generateColor();
}

function GameOver() {
    changeScoreUi();
    wrongScreen.style.display = '';
    let corr = resBox.getAttribute('id').toString();
    corr = corr.substring(corr.length - 1, corr.length)
    correctBox.innerText = `Box ${corr} was the answer`
}

function changeRgbUi() {
    rgbValue.innerText = resColor;
}

function changeScoreUi() {
    score.innerText = `Score - ${scoreTotal}`
    wrongScreen.querySelector('.score').innerText = `Score - ${scoreTotal}`;
}

function loadGame() {
    getElements();
    generateColor();
    setEvents();

}

loadGame();

