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
 const confirmAlert = document.getElementById("confirm");
 const form = document.querySelector("form");
 form.addEventListener('submit', (event) => 
    {  event.preventDefault();
       confirmAlert.innerText = `Thanks ${fname} ${lname}! Submission received.`;
       console.log("submitted")
    });

// focus blur events

const focusEvent = document.getElementById("focusEvent");
const inAlert = document.getElementById("inputAlert");

focusEvent.addEventListener("focus", (event)=> 
{
    inAlert.innerText = "Listening!";
    console.log(event.target.tagName);
    event.target.style.backgroundColor = "#c3602c";
});

focusEvent.addEventListener("blur", (event)=> 
    {
        inAlert.innerText = "Can't Hear!";
        console.log(event.target.tagName);
        event.target.style.backgroundColor = "#4d4d4d";
    });

// delegation

const btnGroup = document.querySelector(".delegation");
btnGroup.addEventListener("click", (event) =>
{   if (event.target.tagName === 'BUTTON') {
    event.target.classList.toggle("colorChange");
    console.log(event.target.innerText);
    document.getElementById("clickDisplay").innerText = `You clicked: ${event.target.innerText}`;
}
});