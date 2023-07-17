const car = {
  make: 'Toyota',
  model: 'Camry',
  year: '2018',
  start: function () {
    console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
  },
};

class Mobil {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
  }
}

const shop = new Mobil('Suzuki', 'Ertiga', 2015);
shop.start();

console.log('start' in shop);
console.log('make' in shop);
console.log('model' in shop);
console.log('year' in shop);
