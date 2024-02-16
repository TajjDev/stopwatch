
document.addEventListener('DOMContentLoaded', ()=> {
    // Function to display the welcome page for 3 seconds
    function showWelcomePage() {
        const welcomePage = document.querySelector('.welcome-page');
        welcomePage.innerHTML =
         `<body>
            <div class="welcome-page">                
                <img src="./img/f2.gif" alt="" style="width: 200px; height: 200px;">
            </div>
         </body>`
        const mainPage = document.querySelector('.main-page');
        welcomePage.style.display = 'flex';
        mainPage.style.display = 'none';
        // Hide the welcome page after 3 seconds and show the main page
        setTimeout(function () {
            mainPage.style.display = 'flex';
            welcomePage.style.display = 'none';
        }, 4000);
    }
    // Call the function when the DOM content is loaded
    showWelcomePage();
});

const playButton = document.getElementById('hr')
const stopButton = document.getElementById('stopHr')
const resetButton = document.getElementById('resetHr')

stopButton.style.display = "none"
resetButton.style.display = "none"


//TIMER FUNCTIONALITY


let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer(){

    playButton.style.display = "none"
    stopButton.style.display = ""
    resetButton.style.display = ""

  timer = setInterval(updateTimer, 1000)
     
}

function stopTimer() {

    playButton.style.display = ""
    stopButton.style.display = "none"
    clearInterval(timer);
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    
    playButton.style.display = ""
    stopButton.style.display = "none"
    resetButton.style.display = "none"

    clearInterval(timer);

    updateDisplay();
}

function updateTimer() {
    seconds += 1;

    if (seconds === 60) {
        seconds = 0
        minutes += 1
        
    }if (minutes === 60) {
        minutes = 0;
        hours += 1;
    }

    updateDisplay()
}

function updateDisplay() {

    document.getElementById("hrID").innerHTML = formatTime(hours) 
    document.getElementById("minID").innerHTML = formatTime(minutes);
    document.getElementById("secID").innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? '0' + time: time;
}































