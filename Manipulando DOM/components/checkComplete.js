const marca = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener('click', completeTask);
    return i;
}

const completeTask = (e) => {
    const element = e.target;
    element.classList.toggle("fas");
    element.classList.toggle("CompleteIcon");
    element.classList.toggle("far");
}


export default marca;