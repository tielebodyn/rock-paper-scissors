import Div from "../components/Div.js";
import Text from "../components/Text.js";


const LoadingPage = (wrapper) => {
    wrapper.innerHTML = ''
    Text({
        size: 'h3',
        text: 'vorm blad, steen of schaar met je handen',
        parent: wrapper,
        className: 'subtitle',
        id: 'loadingTitle'
    })
    Div({
        parent: wrapper,
        id: 'explinationImgWrapper'
    })
    let explinationImgWrapper = document.getElementById('explinationImgWrapper')
    Text({
        size: 'h3',
        text: '👊',
        parent: explinationImgWrapper,
        className: 'subtitle',
        id: 'choiceImg'
    })
    Text({
        size: 'h3',
        text: '✋',
        parent: explinationImgWrapper,
        className: 'subtitle',
        id: 'choiceImg'
    })
    Text({
        size: 'h3',
        text: '✌️',
        parent: explinationImgWrapper,
        className: 'subtitle',
        id: 'choiceImg'
    })
    Text({
        size: 'h3',
        text: 'laden...',
        parent: wrapper,
        className: 'subtitle',
        id: 'loadingTitle'
    })
}

export default LoadingPage