import Div from "../components/Div.js";
import LoadingPage from "../views/LoadingPage.js";
import rockPaperScissors from "./rockPaperScissors.js";


let wrapper = document.getElementById('wrapper');
const URL = "https://teachablemachine.withgoogle.com/models/JjYJhbH8J/";
//old model: https://teachablemachine.withgoogle.com/models/mru5X8V1_/
// newest 6k scissors:
// https://teachablemachine.withgoogle.com/models/JjYJhbH8J/
let model, webcam, maxPredictions;
let choice;
let playing = false


async function initCamera() {

    LoadingPage(wrapper)

    let modelURL = URL + "model.json";
    let metadataURL = URL + "metadata.json";
    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(400, 400, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    wrapper.innerHTML = ''
    playing = true

    window.requestAnimationFrame(loop);
    Div({
        parent: wrapper,
        id: 'canvasWrapper'
    })
    let canvasParent = document.getElementById('canvasWrapper')
    // append elements to the DOM
    canvasParent.appendChild(webcam.canvas);
}



async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);

}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    if (playing) {
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            if (prediction[i].probability > 0.95) {
                choice = prediction[i].className
            }
        }
    }
}



const stopCamera = () => {
    wrapper.innerHTML = ''
    playing = false
    let {
        winner,
        usersChoice,
        computersChoice
    } = rockPaperScissors(choice)
    return {
        winner,
        usersChoice,
        computersChoice
    }
}
export {
    initCamera,
    stopCamera
}