
import { fuelState } from './fuel-state.js';
import { speedState } from './speed-state.js';

export const refuelPercent = (p) => {
  if (speedState.get() > 0) {
    alert('Stop the vehicle before refueling.');
    return;
  }
  const newFuel = fuelState.refuelPercent(p);
  document.getElementById('fuel-level').textContent = Math.round(newFuel);
  alert(`Refueled ${p}% — fuel now ${Math.round(newFuel)}%`);
};

export const refuelFull = () => {
  if (speedState.get() > 0) {
    alert('Stop the vehicle before refueling.');
    return;
  }
  const newFuel = fuelState.refuelFull();
  document.getElementById('fuel-level').textContent = Math.round(newFuel);
  alert('Tank is full.');
};
