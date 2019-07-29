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
// Their number became a very slow and fluctuating climb,
// it must have taken thousands of turns.
// In the end it never got to a point of explosive growth,
// maybe because the maximal speed is within a very fine interval,
// and the mutation makes it too volatile to stay in there.
```
