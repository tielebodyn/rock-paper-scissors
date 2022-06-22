import Button from "../components/Button.js"
import Text from "../components/Text.js"

const ResultPage = ({
    winner,
    usersChoice,
    computersChoice
}) => {

    console.log('winner: ' + winner, 'user: ' + usersChoice, 'computer: ' + computersChoice)
    let resultPage = document.getElementById('resultPage')
    resultPage.classList.remove('hidden')
    let userEmoji = document.getElementById('userEmoji')
    let computerEmoji = document.getElementById('computerEmoji')
    let winnerText = document.getElementById('winnerText')
    let replayButton = document.getElementById('replayButton')
    let userWrapper = document.getElementById('userWrapper')
    let computerWrapper = document.getElementById('computerWrapper')
    if (!usersChoice || winner === undefined) {
        resultPage.innerHTML = ''
        return (
            Text({
                size: 'h3',
                text: 'didn\'t read, try aigan',
                parent: resultPage,
                className: 'subtitle'
            }),
            Button({
                    text: 'try aigan',
                    parent: resultPage,
                    className: 'primaryButton',
                    handleClick: () => handleClick()
                },
                resultPage.children[0].style.padding = '30px 30px'
            )

        )
    }

    /* 
     *** Users choice
     */

    if (usersChoice == 'rock') {
        userEmoji.innerHTML = '👊'
    } else if (usersChoice == 'paper') {
        userEmoji.innerHTML = '✋'
    } else if (usersChoice == 'scissors') {
        userEmoji.innerHTML = '✌️'
    }
    /* 
     *** Computers choice
     */
    if (computersChoice == 'rock') {
        computerEmoji.innerHTML = '👊'
    } else if (computersChoice == 'paper') {
        computerEmoji.innerHTML = '✋'
    } else if (computersChoice == 'scissors') {
        computerEmoji.innerHTML = '✌️'
    }
    if (winner == 'equal') {
        winnerText.innerHTML = 'its equal, try aigan!'
        computerWrapper.classList.add('border')
        userWrapper.classList.add('border')
    } else if (winner == 'computer') {
        winnerText.innerHTML = 'computer wins! 😭'
        computerWrapper.classList.add('border')
    } else {
        winnerText.innerHTML = 'You win! 🎉🎉'
        userWrapper.classList.add('border')
    }
    replayButton.onclick = function () {
        window.location.reload()
    }
}


export default ResultPage