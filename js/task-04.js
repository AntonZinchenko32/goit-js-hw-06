let counterValue = 0;

const incBtn =
    document.querySelector('button[data-action="increment"]');
const decBtn =
    document.querySelector('button[data-action="decrement"]');

const value = document.querySelector("#value");

incBtn.addEventListener("click", () => {
    counterValue++;
    value.textContent = counterValue;
    
});

decBtn.addEventListener("click", () => {
    counterValue--;
    value.textContent = counterValue;
 });   












