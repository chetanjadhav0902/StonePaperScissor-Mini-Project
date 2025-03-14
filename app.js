let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");



let userscorepar=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score"); 
const genCompChoice=()=>{
    const options=["rock", "paper","scissors"];
    const randIdx=Math.floor(Math.random()*3); 
    return options[randIdx];
};
 
const drawGame=()=>{
    console.log("game was draw ");
    msg.innerText="Game was Drwa. Try Again "; 
    msg.style.backgroundColor="black";

};

const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        userscorepar.innerText=userScore;
        
        msg.innerText=`User Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}


const playGame=(userChoice)=>{
    
    console.log("User  choice ",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
   
    console.log("comp choice =", compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice=="rock"){
            // scissor, paper
          userwin=  compChoice==="paper"?false:true ;


        }
        else if(userChoice=="paper"){
            userwin=compChoice==="scissor"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice, compChoice);
         

    }
}   

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);


    });
});