const tempDisplay = document.getElementById("temperatureDisplay");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let temperatureValue = 10;

function updateDisplay() {
    tempDisplay.textContent = `${temperatureValue}°C`;
    tempDisplay.classList.toggle("hot", temperatureValue >= 15);
    tempDisplay.classList.toggle("cold", temperatureValue < 15);
}

function changeTemperature(delta) {
    const newTemp = temperatureValue + delta;
    if (newTemp >= 0 && newTemp <= 30) {
        temperatureValue = newTemp;
        updateDisplay();
    }
}

increaseBtn.addEventListener("click", () => changeTemperature(1));
decreaseBtn.addEventListener("click", () => changeTemperature(-1));

updateDisplay();