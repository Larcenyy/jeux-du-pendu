let infosPlayer = document.getElementById("infosPlayer");
let sendInfos = document.getElementById("send")
let textInfos = document.getElementById("text")
let goodWords = document.getElementById("goodWords")
let countTenta = document.getElementById("tenta");
let deadInfo = document.getElementById("deadinfo");
deadInfo.style.display = "none"


let dead = document.querySelector("body");

dead.style.background = "white"


let myBox = document.getElementById("box");
myBox.style.display = "none"

let firstBox = document.getElementById("firstBox");

let mots = [
    "fruits",
    "banana",
    "gay"
]

let lettres = []
let randomIndex = Math.floor(Math.random() * mots.length);
let motsArray = []

const level = {
    difficulties:{
        easy: {
            counter : 8
        },
        medium: {
            counter : 6
        },
        hard: {
            counter : 3
        }
    },

    startGame: function(difficulty) {
        hideGame()
        countTenta.innerHTML = "Nombre de tentative : " + level.difficulties[difficulty].counter
        countTenta.style.color = "red"

        this.settings = level.difficulties["medium"].counter;
        console.log(level.difficulties[difficulty].counter)
    },
}

for(let i = 0; i < mots[randomIndex].length; i++){
    motsArray.push(mots[randomIndex][i])
}

function win() {
    if (motsArray.length === 0){
        textInfos.innerHTML = "Vous avez trouver le mot cacher, félicitations le mot était :  " + mots[randomIndex];
    }
}

if (motsArray.length <= 0){
    textInfos.innerHTML = "Vous avez trouver le mot cacher, félicitations le mot était :  " + mots[randomIndex];
}
if (motsArray.length >= 0){
    start()
}

function hideGame(){
    myBox.style.display = "flex"
    myBox.style.flexDirection = "column"
    firstBox.style.display = "none";
}

function start(){
    sendInfos.addEventListener("click", function (){
        motsArray.sort()
        if ((level.difficulties.medium.counter <= 0)) {
            dead.style.display = "flex";
            countTenta.innerHTML = "Nombre de tentative : 0, vous avez échouer le mot était : " + mots[randomIndex];
            dead.style.background = "red"
            firstBox.style.display = "none";
            myBox.style.display = "none"
            deadInfo.style.display = "flex"
            deadInfo.style.fontSize = "28px"
        }
        else if (level.difficulties.medium.counter > 0 && !lettres.includes(infosPlayer.value)){
            --level.difficulties.medium.counter;
            textInfos.innerHTML +=  infosPlayer.value;
            countTenta.innerHTML = "Nombre de tentative : " + level.difficulties.medium.counter;
            console.log(this.settings);

            lettres.push(infosPlayer.value);
        }
        if (motsArray.includes(infosPlayer.value)){

            ++level.difficulties.medium.counter;

            countTenta.innerHTML = "Nombre de tentative : " + level.difficulties.medium.counter;
            goodWords.innerHTML += infosPlayer.value;
            lettres.push(infosPlayer.value)
            motsArray = motsArray.filter(e => e !== '' + infosPlayer.value);

            win()
        }
        infosPlayer.value = "";
        console.log(motsArray.length)
    })
}

