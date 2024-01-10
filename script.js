// Variables

const btn = document.getElementById("btn");
const infoIcon = document.getElementById("infoIcon");
const closeIcon = document.getElementById("closeIcon");
const txtBlock = document.getElementById("txtBlock");
const welc1 = document.createElement("welc1");
const welc2 = document.createElement("welc2");
const welc3 = document.createElement("welc3");

// Create content for welcome message

welc1.textContent = "Keycode Generator created by Michael Bishop for week 3 Activity of Master 54 Software with Code Nation.";
welc2.textContent = "Tap up to 2 keys to generate the corresponding key code/s.";
welc3.textContent = "Reset to start over.";

// Event listener for reset button

btn.addEventListener("click", (event) => {  
location.reload();
});


// Event listener for info icon

infoIcon.addEventListener("click", (event) => {

 // Add content to welcome message
    document.getElementById("welc1").appendChild(welc1);
    document.getElementById("welc2").appendChild(welc2);
    document.getElementById("welc3").appendChild(welc3);

    // on info click, hide gen frame and show welcom frame
    document.getElementById("welcomeFrame").style.display = "flex";
    document.getElementById("genFrame").style.display = "none";
});
// Event listener for close icon

closeIcon.addEventListener("click", (event) => {

    // on close click, hide welcome frame and show gen frame
    document.getElementById("welcomeFrame").style.display = "none";
    document.getElementById("genFrame").style.display = "flex";
});
// Variable for increment counter
let eventRun = 0;

// Event listener for key down event

window.addEventListener("keydown", (event) => {

    // this stops tab press switching tabs
    event.preventDefault()

    // only run code if eventRun variable is less than 2
    if(eventRun < 2){

        // code here
    const p = document.createElement("p");
    const q = document.createElement("q");

    p.textContent = `${event.key}`;
    q.textContent = `${event.keyCode}`;

    // Add Space identifier by keycode because event key is blank

    if(q.textContent === "32"){
        p.textContent = "Space"
    }

    // Add key event & code to Elements 

    document.getElementById("keyEvent").appendChild(p);
    document.getElementById("keyCode").appendChild(q);
    
    // Testing
    // console.log(`${event.key} ${eventRun} ${event.keyCode} ${event.charCode}`);  
    }
    // after running increase variable by 1
    eventRun++
})

