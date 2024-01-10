
// Event listener for click on reset button

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {  
location.reload();
});

// Event listener for info icon

const infoIcon = document.getElementById("infoIcon");

infoIcon.addEventListener("click", (event) => {
    document.getElementById("welcomeInfo").style.display = "flex";
    setTimeout(() => {
    document.getElementById("welcomeInfo").style.display = "none";
    }, 6000);
})

// Variable for increment counter

let eventRun = 0

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

    // Add Space identifier by keycode, event key is blank

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

