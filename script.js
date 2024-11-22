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
    event.target.classList.toggle("colorChange");
    console.log(event.target.innerText);
    document.getElementById("clickDisplay").innerText = `You clicked: ${event.target.innerText}`;
}
});

//Keyboard Events
const keyboard = document.getElementById("keyboard");
const historyDisplay = document.getElementById("pastkey");
const currentDisplay = document.getElementById("currentkey");

keyboard.addEventListener("keydown", (event)=>
    {currentDisplay.innerText = `Current Key: ${event.key}`;
    });

keyboard.addEventListener("keyup", (event)=>
{  setTimeout(() => {
    historyDisplay.innerText = `Last Pressed: ${event.key}`
    }, 700);;});

 //Form Events
 const fname = document.getElementById("fname").value;
 const lname = document.getElementById("lname").value;
 const confirm = document.getElementById("confirm");
 const form = document.querySelector("form");
 form.addEventListener('submit', (event) => 
    {  event.preventDefault();
       confirm.innerText = `Thanks ${fname} ${lname}! Submission received.`;
       console.log("submitted")
    });
