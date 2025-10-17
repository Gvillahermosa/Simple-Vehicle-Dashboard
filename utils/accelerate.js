//event module to handle engine acceleration
import { speedState } from "./speed-state.js";
import { isEngineOn } from "./engine-status.js";
import { fuelState } from './fuel-state.js';

const CONSUME_PER_ACCEL_PERCENT = 0.5;
export const accelerate = () => {
    if (!isEngineOn()){
        document.getElementById('message').textContent = 'Start the engine first!';
        return;
    }

    const speed = speedState.increase();
 const newFuel = fuelState.consumePercent(CONSUME_PER_ACCEL_PERCENT);

  document.getElementById('speed').textContent = speed;
  document.getElementById('fuel-level').textContent = Math.round(newFuel);
  if (newFuel <= 10) alert('Low fuel!');

}
