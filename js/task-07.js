
const fontSizeController = document.querySelector("#font-size-control");
const fontPreviewer = document.querySelector("#text");

fontPreviewer.style.fontSize = `${fontSizeController.value}px`;

fontSizeController.addEventListener("input", (event) => {
    fontPreviewer.style.fontSize = `${fontSizeController.value}px`;
});