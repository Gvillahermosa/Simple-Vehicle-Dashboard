
export const lightsOn = () => {
  const lightStatus = document.getElementById('lights-status');
  lightStatus.textContent = 'ON';
  lightStatus.style.color = 'yellow'; // or 'green'
};


export const lightsOff = () => {
  const lightStatus = document.getElementById('lights-status');
  lightStatus.textContent = 'OFF';
  lightStatus.style.color = 'black'; // or 'green'
};
