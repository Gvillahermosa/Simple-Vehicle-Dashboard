// brake.js
import { speedState } from "./speed-state.js";

export const brake = () => {
  const speed = speedState.decrease();
  document.getElementById("speed").textContent = speed;
};
