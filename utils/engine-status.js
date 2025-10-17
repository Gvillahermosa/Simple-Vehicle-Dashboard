//event module to handle engine status changes

import { speedState } from "./speed-state.js";
import { lightsOff } from "./lights.js";
import { fuelState } from './fuel-state.js';

let idleInterval;
let engineOn = false;
const speed = speedState.reset()

export const startEngine = () => {
    engineOn = true;
    document.getElementById('engine-status').textContent = 'ON';
    document.getElementById('accelerate').disabled = false;
    document.getElementById('brake').disabled = false;
    document.getElementById('toggle-lights').disabled = false;
    document.getElementById("speed").textContent = speed;
    document.getElementById('message').textContent = '';
    idleInterval = setInterval(() => {
    // tiny idle consumption per second (0.02% = 0.01%/sec etc.)
    const newFuel = fuelState.consumePercent(0.02);
    document.getElementById('fuel-level').textContent = Math.round(newFuel);
    if (newFuel <= 5) {
      showWarning('Very low fuel — stop driving soon!');
    }
    // if fuel empty, auto-stop engine:
    if (newFuel <= 0) {
      stopEngine(); // call your stop function
      showWarning('Fuel empty — engine stopped.');
    }
  }, 1000);
}

export const stopEngine = () => {
    engineOn = false;
    clearInterval(idleInterval);
    document.getElementById('engine-status').textContent = 'OFF';
    document.getElementById('accelerate').disabled = true;
    document.getElementById('brake').disabled = true;
    document.getElementById('toggle-lights').disabled = true;
    document.getElementById("speed").textContent = speed;
    lightsOff();
}

export const isEngineOn = () => engineOn;
