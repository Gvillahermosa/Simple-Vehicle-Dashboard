import { startEngine, stopEngine, isEngineOn } from "../utils/engine-status.js";
import { accelerate } from "../utils/accelerate.js";
import { brake } from "../utils/brake.js";
import { lightsOn,lightsOff } from "../utils/lights.js";
import { refuelPercent } from "../utils/refuel.js";
import { speedState } from "../utils/speed-state.js";
import { fuelState } from "../utils/fuel-state.js";

export const dashboard = () => {
    document.body.innerHTML = `
    <div class="vehicle-dashboard">
    <h1>Vehicle Dashboard</h1>
    <p>Engine: <span id="engine-status">OFF</span></p>
    <p>Speed: <span id="speed">0</span> km/h</p>
    <p>Fuel Level: <span id="fuel-level">100</span>%</p>
    <p>Lights: <span id="lights-status">OFF</span></p>

    <button id="toggle-engine">Start Engine</button>
    <button id="toggle-off-engine">Turn Off Engine</button>
    <button id="accelerate" disabled>Accelerate</button>
    <button id="brake" disabled>Brake</button>
    <button id="toggle-lights" disabled>Toggle Lights</button>
    <button id="refuel">Refuel</button>

    <div id="message"></div>
    </div>
    `;
    //Andar Makina
    document.getElementById('toggle-engine').addEventListener('click', startEngine);
    document.getElementById('toggle-off-engine').addEventListener('click', stopEngine);

    //Gasolinador
    const accelerateBtn = document.getElementById('accelerate');
    let accelerateInterval;

    accelerateBtn.addEventListener('mousedown', () => {
    if (!isEngineOn()) return;

    accelerateInterval = setInterval(() => {
        accelerate();
    }, 150);
    });

    accelerateBtn.addEventListener('mouseup', () => clearInterval(accelerateInterval));
    accelerateBtn.addEventListener('mouseleave', () => clearInterval(accelerateInterval));

    //Brake
    const brakeBtn = document.getElementById('brake');
    let brakeInterval;

    brakeBtn.addEventListener('mousedown', ()  => {
        if (!isEngineOn()) return;
        brakeInterval = setInterval(() => {
            brake();
        }, 50);
    })

    brakeBtn.addEventListener('mouseup', () => clearInterval(brakeInterval));
    brakeBtn.addEventListener('mouseleave', () => clearInterval(brakeInterval));

    //Suga
    document.getElementById('toggle-lights').addEventListener('click', lightsOn);
    document.getElementById('toggle-lights').addEventListener('dblclick', lightsOff);

    //Gasolinador gamit keyboard
    let canAccelerate = true;
    document.addEventListener('keydown', (event) => {
    if ((event.key === 'w' || event.key === 'W') && canAccelerate) {
        accelerate();
        canAccelerate = false;
        setTimeout(() => canAccelerate = true, 150);
    }
    });

    //Brake gamit keyboard
    let canBrake = true;
    document.addEventListener('keydown', (event) => {
    if ((event.key === 's' || event.key === 'S') && canBrake) {
        brake();
        canBrake = false;
        setTimeout(() => canBrake = true, 150);
    }
    });

    //Pagasolina
    let refuelInterval;
    const REFUEL_RATE_PERCENT_PER_SEC = 5; // 5% per second

    refuel.addEventListener('mousedown', () => {
    if (speedState.get() > 0)  document.getElementById('message').textContent = 'Stop the car first!';
    if (speedState.get() == 0)  document.getElementById('message').textContent = '';
    refuelInterval = setInterval(() => {
        const newFuel = fuelState.refuelPercent(REFUEL_RATE_PERCENT_PER_SEC / 4);
        document.getElementById('fuel-level').textContent = Math.round(newFuel);
        if (newFuel == 100)  alert('Tank is full.');
        if (newFuel >= 100) clearInterval(refuelInterval);
    }, 250);
    });

    refuel.addEventListener('mouseup', () => clearInterval(refuelInterval));
    refuel.addEventListener('mouseleave', () => clearInterval(refuelInterval));


}
