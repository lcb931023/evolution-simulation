Evolution Simulation
====

This is a purely mathematical simulation of the evolutionary algorithm... or is it?

- initialization
- selection
- mutation
- Termination - eliminate weak genes

## Simulation

Creatures eat to gather energy. When energy runs out they die. They also reach an old age?

There are food in the map (scarce or dense can be adjusted by player).
Creatures move to eat food. Moving spends energy.

Reproduction happens at the same rate for all species.

Mutated parameter: speed

Expected result: The scarcer the food distribution is, the faster the creatures would evolve to.

## Discussion w/ Jan

- The simulation can be actually ran if we edge warp the creature, distribute food randomly based on scarcity, and respawn the food after they got eaten (to avoid rewarding campers.)
- The starting condition needs to be experimented: do we start with same parameters for all creatures, or mixed species? The latter could make for faster evolution?

# Parameter Combos that worked

```javascript
// in this case, the creature amount dropped to a dangerous 9 at one point.
// the final creatures all evolved their speed to between 1-2

// NOTE: creatures started randomly, speed from 0 to 1
const FOOD_SCARCITY = 0.2
const ENERGY_TO_REPRODUCE = 20;

const STARTING_ENERGY = 10;
const ENERGY_TO_MOVE = 0.2;
const ENERGY_FROM_FOOD = 1;

const MUTATION_RATE = 0.2;
const MUTATE_MAX = 0.3;
```

```javascript
// in this case, the creatures never dropped below 100.
// their speed all evolved past 0.5, but only 20% evolved above 1

// NOTE: creatures started randomly, speed from 0 to 1
const FOOD_SCARCITY = 0.2
const ENERGY_TO_REPRODUCE = 20;

const STARTING_ENERGY = 10;
const ENERGY_TO_MOVE = 0.5;
const ENERGY_FROM_FOOD = 5;

const MUTATION_RATE = 0.2;
const MUTATE_MAX = 0.3;

// with this setup, even when 
// const FOOD_SCARCITY = 0.1
// the creatures survived and thrived.
// Their speed ended up a very even spread between 0-1

// Their number became a very slow and fluctuating climb,
// it must have taken thousands of turns.
// In the end it never got to a point of explosive growth,
// maybe because the maximal speed is within a very fine interval,
// and the mutation makes it too volatile to stay in there.

// Interestingly, in this case food scarcity dropping
// ended up encouraging more diverse tactics.
// while speed gets you more food,
// it also spends more energy.
// crawling slowly to find food is equally viable.

// When the same setup was tested with 
// creatures started randomly, speed from 0 to _10_,
// the speed converged around 3-4.
```

```javascript
const FOOD_SCARCITY = 0.1 // possibility of food existing on one unit of distance
const ENERGY_TO_REPRODUCE = 20;

const STARTING_ENERGY = 10;
const ENERGY_TO_MOVE = 0.5;
const ENERGY_FROM_FOOD = 10;

const MUTATION_RATE = 0.2;
const MUTATE_MAX = 0.3;
const SPEED_MIN = 0.1;

// Creatures start between 0 to 10

// This setup yields faster creatures.
// If you decrease food scarcity,
// you can raise energy from food by the same ratio
// to encourage faster creatures.
```