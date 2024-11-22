// mouse event listener on hover/no hover

const me1 = document.getElementById("me-1");
me1.addEventListener("mouseenter", enter);
me1.addEventListener("mouseover", hover);
me1.addEventListener("mouseleave", leave);
function enter(){
    me1.innerText = "Hover Start";
}
function hover(){
    setTimeout(() => {
        me1.innerText = "Hovering";
      }, 500);
}
function leave(){
    me1.innerText = "No Hover";
}

const btnGroup = document.querySelector(".delegation");
btnGroup.addEventListener("click", (event) =>
{   if (event.target.tagName === 'BUTTON') {
    event.target.classList.toggle("colorChange")
}
});
