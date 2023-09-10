const btnEl = document.getElementById("calculate");
const billIn = document.getElementById("bill"); 
const tipIn = document.getElementById("tip"); 
const totalSpan = document.getElementById("total"); 




function calcTotal() {
    const billValue = billIn.value;
    const tipValue = tipIn.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = totalValue.toFixed(2) + "$";

}

btnEl.addEventListener("click", calcTotal)

