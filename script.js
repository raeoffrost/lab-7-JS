// mouse event listener on hover/no hover

const me1 = document.getElementById("me-1");
me1.addEventListener("mouseover", hover);
me1.addEventListener("mouseleave", noHover);

function hover(){
    me1.innerText = "Hover";
}
function noHover(){
    me1.innerText = "No Hover";
}