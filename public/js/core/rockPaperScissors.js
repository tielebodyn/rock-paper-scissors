const createComputerAnswer = () => {
    let arr = ['rock', 'paper', 'scissors']
    let rand = Math.floor(Math.random() * 3);
    let computersChoice = arr[rand]
    return computersChoice
}

const rockPaperScissors = (choice) => {
    let winner;
    let computersChoice = createComputerAnswer()
    let usersChoice = choice.toLowerCase()


    if (usersChoice === 'rock' && computersChoice === 'paper') {
        winner = 'computer'
    } else if (usersChoice === 'paper' && computersChoice === 'scissors') {
        winner = 'computer'
    } else if (usersChoice === 'scissors' && computersChoice === 'rock') {
        winner = 'computer'
    } else if (computersChoice === 'paper' && usersChoice === 'scissors') {
        winner = 'user'
    } else if (computersChoice === 'scissors' && usersChoice === 'rock') {
        winner = 'user'
    } else if (computersChoice === 'rock' && usersChoice === 'paper') {
        winner = 'user'
    } else if (computersChoice === usersChoice) {
        winner = 'equal'
    }
    return {
        winner: winner,
        usersChoice: usersChoice,
        computersChoice: computersChoice
    }
}


export default rockPaperScissors