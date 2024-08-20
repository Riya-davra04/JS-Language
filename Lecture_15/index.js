const rollDice = () => {
    let dice = document.getElementById('dice');
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    let current = 1;
    let intervalId = setInterval(() => {
        dice.textContent = current;
        current = current % 6 + 1; 
    }, 30);
    
    setTimeout(() => {
        clearInterval(intervalId);
        dice.textContent = randomNumber;
    }, 1000); 
}

document.getElementById('rollButton').addEventListener('click', rollDice);
