let firNum = document.getElementById("firNum");
let secNum = document.getElementById("secNum");
let userInputEl = document.getElementById("userInput");
let gameResEl = document.getElementById("gameRes")


function getRanNum(){
    let fisrstRanNum = Math.ceil(Math.random() * 100);
    console.log(fisrstRanNum)
    firNum.textContent = fisrstRanNum;
    console.log(firNum)

    let secRanNum = Math.ceil(Math.random() * 100);
    console.log(secRanNum)
    secNum.textContent = secRanNum
    console.log(secNum)
}

function restart(){
    gameResEl.textContent = "";
    userInputEl.value= "";

    getRanNum()

     gameResEl.style.backgroundColor ="";
             gameResEl.style.padding ="0"


}

function check(){

    let a = parseInt(firNum.textContent);
    let b = parseInt(secNum.textContent)

    let sum = a + b;

    let userval = parseInt(userInputEl.value)
        if (sum === userval){
            gameResEl.textContent ="You got the right Answer."
            gameResEl.style.backgroundColor = "green"
            gameResEl.style.width = "100%";
            gameResEl.style.textAlign = "center"
            gameResEl.style.color = "#fff";
            gameResEl.style.padding ="10px"
            gameResEl.style.margin ="auto"
            userInputEl.style.color ="#ec2f2f"
        }

        else{
            gameResEl.textContent = "Enter A valid Input"
            gameResEl.style.backgroundColor ="red";
            gameResEl.style.color ="#fff"
             gameResEl.style.padding ="10px"
             gameResEl.style.display="block"
        }

}


getRanNum()