const Div = ({
    parent,
    className,
    id
}) => {
    let div = document.createElement('div');
    div.classList.add(className)
    parent === 'body' ? document.body.append(div) : parent.appendChild(div);
    div.setAttribute("id", id)
}


export default Div