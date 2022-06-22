const Image = ({
    src,
    parent,
    className,
    id
}) => {
    let img = document.createElement('img');
    img.src = src
    img.classList.add(className)
    parent === 'body' ? document.body.append(img) : parent.appendChild(img);
    img.setAttribute("id", id)
}


export default Image