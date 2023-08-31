

const designDiv = document.getElementById("design-container");
const designBtn = document.getElementById("design-button");
const codeDiv = document.getElementById("code-container");
const codeBtn = document.getElementById("code-button");

designBtn.addEventListener('click', toggleDesign);
codeBtn.addEventListener('click', toggleCode);


// function toggleDesign() {
//     codeDiv.style.visibility = "hidden";
//     designDiv.style.visibility = "visible";
// }
// function toggleCode() {
//     codeDiv.style.visibility = "visible";
//     designDiv.style.visibility = "hidden";
// }




function toggleDesign() {
    const designDivDisplay = window.getComputedStyle(designDiv).display;
    if (designDivDisplay === 'none')  {
        designDiv.style.display = 'block';
        codeDiv.style.display = 'none';
    }
}

function toggleCode() {
    const codeDivDisplay = window.getComputedStyle(codeDiv).display;
    if (codeDivDisplay === 'none') {
        codeDiv.style.display = 'block';
        designDiv.style.display = 'none';
    }
}





