import marca from "./components/checkComplete.js"
import deleteIcon from "./components/deleteIcon.js"

(() => {
    const btn = document.querySelector('[data-form-btn]');

    const createTask = (e) => {
        e.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card");
        input.value = ''

        const textContent = document.createElement('div');
        textContent.appendChild(marca());
        const span = document.createElement('span');
        span.classList.add("task");
        span.innerText = value;
        textContent.appendChild(span);


        task.appendChild(textContent);
        task.appendChild(deleteIcon());

        list.appendChild(task)
    }


    btn.addEventListener('click', createTask);

})()