const Button = ({
    text,
    handleClick,
    parent,
    className
}) => {
    let button = document.createElement('button');
    button.innerText = text;
    button.classList.add(className)
    parent === 'body' ? document.body.append(button) : parent.appendChild(button);
    button.addEventListener('click', handleClick)
}


export default Button