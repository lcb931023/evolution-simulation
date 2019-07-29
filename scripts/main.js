const FOOD_SCARCITY = 0.5 // possibility of food existing on one unit of distance
const ENERGY_TO_REPRODUCE = 20;

const allCreatures = new Array(100);

function generateCreatures() {
  for (let index = 0; index < allCreatures.length; index++) {
    allCreatures[index] = new Creature(Math.random() * 10);
  }
}

function updateAll() {
  allCreatures.forEach((c, i) => {
    c.update(FOOD_SCARCITY)
    if (c.energy > ENERGY_TO_REPRODUCE) {
      allCreatures.push(c.reproduce())
    }
    if (c.energy <= 0) {
      allCreatures.splice(i, 1)
    }
  });
}

function loop() {
  simulate()
  if (allCreatures.length > 11000) {
    console.warn("Too many creatures. Stopping simulation.");
  } else {
    requestAnimationFrame(loop)
  }
}

const VIEW_LOG = document.querySelector("#log")

function simulate() {
  updateAll()
  console.log(allCreatures.length)
  VIEW_LOG.innerHTML += JSON.stringify(allCreatures[0]) + "\r"
}

generateCreatures()
loop()
