const btn1 = document.querySelector("button");
let counter = 1;
btn1.addEventListener("click", () => {
    const ulElement = document.querySelector("ul");
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.textContent = counter;

    if ((counter % 3) === 0) {
        liElement.classList.add("big");
    }
    counter += 2;
})