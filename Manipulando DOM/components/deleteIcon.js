const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", delTask);
    return i;
}

const delTask = (e) => {
    const parent = e.target.parentElement;
    parent.remove();
}

export default deleteIcon;