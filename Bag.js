class Bag {
  static maxWeight = 23;

  constructor(weight) {
    if (!weight) {
      throw new Error('bag needs weight');
    } else if (weight > Bag.maxWeight) {
      throw new Error('Bag exceeds maximum weight');
    }
    this.weight = weight;
  }
}

let bagOne = new Bag(20);
console.log(bagOne);

module.exports = Bag;
