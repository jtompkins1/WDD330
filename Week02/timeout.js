const countdownElement = document.getElementById("countdown").innerHTML;

const startButton = document.getElementById("startButton");

let timeRemaining = 10;

startButton.addEventListener("click", () => {
    countdownElement.textContent = timeRemaining;

    const interval = setInterval(() => {
        timeRemaining--;
        countdownElement.textContent = timeRemaining;

        if (timeRemaining === 0) {
            clearInterval(interval);
            setTimeout(() => {
                alert("Time's up!");
        }, 1000);
        }
    }, 1000);
});