let ComputerMove='';
            let result='';
            let playerMove='';

            let score = JSON.parse(localStorage.getItem('score')) ||  {
                    wins: 0,
                    losses: 0,
                    ties: 0
                };

            updatescore();

            function Playgame(playerMove)
            {
                ComputerMove= rockPaper();

                if(playerMove === 'scissors')
                {                   
                    if(ComputerMove==='rock')
                    {
                        result='You win.';
                        }
                        else if(ComputerMove==='paper')
                        {
                            result='You lose.';
                        }
                        else if(ComputerMove==='scissors'){
                            result='Tie.';
                        }
                    
                }else if(playerMove === 'paper')
                {
                    if(ComputerMove==='rock')
                    {
                        result='You win.';
                    }
                        else if(ComputerMove ==='paper')
                        {
                            result='Tie.';
                        }
                        else if(ComputerMove==='scissors'){
                            result='You lose.';
                        }
                }else if(playerMove === 'rock')
                {
                    if(ComputerMove==='rock')
                    {
                        result='Tie.';
                    }
                    else if(ComputerMove==='paper')
                    {
                        result='You lose.';
                    }
                    else if(ComputerMove==='scissors'){
                        result='You win.';
                    }
                }
                
                if(result === 'You win.')
                {
                    score.wins = score.wins + 1;
                }
                else if(result === 'You lose.')
                {
                    score.losses = score.losses + 1;
                }
                else if(result === 'Tie.')
                {
                    score.ties = score.ties + 1;
                }
                
                localStorage.setItem('score',JSON.stringify(score));
                               
                updatescore();

                document.querySelector('.js-result').innerHTML = result;
                document.querySelector('.js-moves').innerHTML = `you
                    <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png">
                    <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${ComputerMove}-emoji.png">
                    computer`
            }

            function updatescore()
            {
                  
                document.querySelector('.js-score').innerHTML = (`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
                if(score.wins === 0 && score.losses === 0 && score.ties === 0)
                {
                    document.querySelector('.js-result').innerHTML = '';
                    document.querySelector('.js-moves').innerHTML = '';
                }
            }
            function rockPaper()
            {
                let RandomNumber=Math.random();
                
                
                if(RandomNumber > 0 && RandomNumber < 1/3 )
                {
                    ComputerMove='rock';
                }
                else if(RandomNumber >= 1/3 && RandomNumber < 2/3)
                {
                    ComputerMove='paper';
                }
                else if(RandomNumber >=2/3 && RandomNumber < 1)
                {
                        ComputerMove='scissors';
                    }
                    console.log(RandomNumber);
                    
                    return ComputerMove;
                    
 }
//giving an eventlistener that we can use instead of onclick attribute;
 document.querySelector('.js-rock-button').addEventListener('click',()=>{
    Playgame('rock');
 });

 document.querySelector('.js-paper-button').addEventListener('click',()=>{
    Playgame('paper');
 });

 document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    Playgame('scissors');
 });

 //add keydown to the body 
 document.body.addEventListener('keydown',(event)=>{
    
    if(event.key === 'r' || event.key === 'R')
    {
        Playgame('rock');
    }
    else if(event.key === 'p' || event.key === 'P')
    {
        Playgame('paper');
    }
    else if(event.key === 's' || event.key === 'S')
    {
        Playgame('scissors');
    }
 });

 
let isautoPlaying = true;
let intervalId;
 function autoplay()
 {
    if(isautoPlaying === true)
    {
        intervalId = setInterval( () => {
            const playerMove = rockPaper();
            Playgame(playerMove);
        },1000);
        isautoPlaying = false;
    }
    else{
        clearInterval(intervalId);
        isautoPlaying = true;
    }
 }