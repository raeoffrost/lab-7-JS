// mouse event listener on hover
const me1 = document.getElementById("me-1");
me1.addEventListener("mouseenter", hello);
me1.addEventListener("mouseleave", goodbye);
function hello(){
    me1.innerText = "Hello";
}
function goodbye(){
    me1.innerText = "Bye";
}