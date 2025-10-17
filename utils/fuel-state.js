export function createFuelState({ tankCapacityLiters = 50 } = {}) {
  let percent = 100; // 0 - 100
  const capacit = tankCapacityLiters;

  const percentToLiters = (p) => (p / 100) * capacit;
  const litersToPercent = (liters) => (liters / capacit) * 100;

  return {
    getPercent: () => Math.max(0, Math.min(100, percent)),
    getLiters: () => Math.max(0, percentToLiters(percent)),


    consumePercent(p) {
      percent = Math.max(0, percent - p);
      return this.getPercent();
    },


    consumeLiters(l) {
      percent = Math.max(0, percent - litersToPercent(l));
      return this.getPercent();
    },


    refuelPercent(p) {
      percent = Math.min(100, percent + p);
      return this.getPercent();
    },

    refuelLiters(l) {
      percent = Math.min(100, percent + litersToPercent(l));
      return this.getPercent();
    },


    refuelFull() {
      percent = 100;
      return this.getPercent();
    }
  };
}

export const fuelState = createFuelState({ tankCapacityLiters: 50 });
