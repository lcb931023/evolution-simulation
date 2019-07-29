/*
Creatures move around to seek food.
They eat food to get energy
Once they have enough energy to reproduce, they do that
*/

const STARTING_ENERGY = 10;
const ENERGY_TO_MOVE = 0.5;
const ENERGY_FROM_FOOD = 2;

const MUTATION_RATE = 0.2;
const MUTATE_MAX = 0.3;
const SPEED_MIN = 0.1;

class Creature {
  constructor(speed) {
    this.speed = speed < SPEED_MIN ? SPEED_MIN : speed;
    this.distTravelled = 0;
    this.energy = STARTING_ENERGY
  }
  // move and eat
  update(foodScarcity) {
    // this calculation is because we are doing virtual sim
    const lastTile = Math.ceil(this.distTravelled)
    // move
    this.distTravelled += this.speed;
    this.energy -= ENERGY_TO_MOVE * this.speed;
    const curTile = Math.ceil(this.distTravelled)
    // calculate chance to have eaten
    const newTiles = curTile - lastTile
    let foundFood = false
    let i = 0
    while(!foundFood && i < newTiles) {
      foundFood = (Math.random() < foodScarcity)
      i++
    }
    // eat
    if (foundFood) this.energy += ENERGY_FROM_FOOD
  }
  reproduce() {
    this.energy -= STARTING_ENERGY
    const mutating = (Math.random() < MUTATION_RATE)
    let childSpeed;
    if (mutating) {
      const mutateAmt = (Math.random() * MUTATE_MAX) * (Math.sign(Math.random()-0.5))
      childSpeed = this.speed + mutateAmt
      if (childSpeed <= SPEED_MIN) childSpeed = SPEED_MIN
    } else childSpeed = this.speed
    return new Creature(childSpeed)
  }
}