import Button from "../components/Button.js"
import Div from "../components/Div.js"
import Text from "../components/text.js"
import {
    initCamera,
    stopCamera
} from "../core/teachableMachine.js"
import ResultPage from "./ResultPage.js"


const ExplanationPage = () => {
    let wrapper = document.getElementById('wrapper')
    let imgWrapper = document.createElement('div')
    Div({
        parent: wrapper,
        className: 'ExplinationPage',
        id: 'ExplinationPage'
    })
    let parent = document.getElementById('ExplinationPage')
    Text({
        size: 'h1',
        text: 'korte uitleg:',
        parent: parent,
        className: 'title'
    })
    Text({
        size: 'h3',
        text: '1. Hou je hand voor de camera op ongeveer 30cm afstand',
        parent: parent,
        className: 'subtitle'
    })
    Text({
        size: 'h3',
        text: '2. vorm blad, steen of schaar met je handen: ',
        parent: parent,
        className: 'subtitle'
    })
    parent.appendChild(imgWrapper)
    let signWrapper = document.createElement('div')
    signWrapper.style.display = 'flex'
    parent.appendChild(signWrapper)
    Text({
        size: 'h3',
        text: '👊',
        parent: signWrapper,
        className: 'subtitle',
        id: 'choiceImg'
    })
    Text({
        size: 'h3',
        text: '✋',
        parent: signWrapper,
        className: 'subtitle',
        id: 'choiceImg'
    })
    Text({
        size: 'h3',
        text: '✌️',
        parent: signWrapper,
        className: 'subtitle',
        id: 'choiceImg'
    })
    Button({
        text: 'start',
        parent: parent,
        className: "primaryButton",
        handleClick: handleClick
    })
}
const handleClick = () => {
    initCamera()
    setTimeout(() => {
        let {
            winner,
            usersChoice,
            computersChoice
        } = stopCamera()
        ResultPage({
            winner,
            usersChoice,
            computersChoice
        })
    }, 10000);
}
export default ExplanationPage