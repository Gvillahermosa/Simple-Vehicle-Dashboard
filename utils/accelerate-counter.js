export function accelerateCounter() {
  let speed = 0;

  return {
    increase() {
      return ++speed;
    },
    decrease() {
      if (speed > 0) speed--;
      return speed;
    },
    reset() {
      speed = 0;
      return speed;
    },
    get() {
      return speed;
    }
  };
}
