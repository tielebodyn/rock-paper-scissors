const Text = ({
    size,
    text,
    parent,
    className,
    id
}) => {
    let textElement = document.createElement(size);
    textElement.innerText = text;
    textElement.classList.add(className)
    parent === 'body' ? document.body.append(textElement) : parent.appendChild(textElement);
    textElement.setAttribute("id", id)
}

export default Text