import Button from "../components/Button.js"
import Div from "../components/Div.js"
import Image from "../components/Image.js"
import Text from "../components/Text.js"
import ExplanationPage from "./ExplinationPage.js"


const LandingsPage = () => {
    let wrapper = document.getElementById('wrapper')
    Div({
        parent: wrapper,
        className: 'LandingsPage',
        id: 'LandingsPage'
    })
    let parent = document.getElementById('LandingsPage')
    Text({
        size: 'h1',
        text: 'Blad, steen schaar',
        parent: parent,
        className: 'title'
    })
    Text({
        size: 'h3',
        text: 'durf jij het op te nemen tegen de computer \n in een potje blad, steen, schaar?',
        parent: parent,
        className: 'subtitle'
    })
    Image({
        src: "./images/rps.gif",
        parent: parent,
        className: 'rpcImage',
        id: 'rpcImage'
    })


    Button({
        text: 'next',
        parent: parent,
        className: 'primaryButton',
        handleClick: () => handleClick()
    })

}
const handleClick = () => {
    wrapper.innerHTML = ''
    ExplanationPage()
}

export default LandingsPage