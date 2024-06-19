const styleDropdown = (container) => {
    container.style.display = "flex";
}

const checkActive = () => {
    const containers = document.getElementsByClassName("dropdown-dynamic-content");

    for (const container of containers) {
        if (container.classList.contains("active")){
            styleDropdown(container);
        }
        else {
            container.style.display = "none";
        }
    }
}

const toggleContainer = (container, button) => {
    container.classList.toggle("active");
    button.classList.toggle("active");
}


export default function myDropdown() {
    const buttons = document.getElementsByClassName("dropdown-dynamic-toggle");
    const containers = document.getElementsByClassName("dropdown-dynamic-content");
    checkActive();

    for (let i = 0; i < buttons.length; i++) {
        const container = containers[i];
        buttons[i].addEventListener("click", () => {
            toggleContainer(container, buttons[i]);
            checkActive();
        })
    }

}