import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { random_seed_modulus } from "./random_seed_modulus.mjs";
export function random_seed_step(state) {
  "one step along a seeded run: the seed that comes after the one it is given";
  "Park-miller, whose multiply never leaves the range a javascript number holds exactly - so it needs no bit twiddling and cannot quietly lose precision.";
  "nought is the one seed the stepping cannot move off, because nought times anything is nought again - so it is read as one instead, and a page handed an empty seed still gets a run of numbers rather than the same number for ever";
  arguments_assert(arguments, 1);
  let from = state;
  let stuck = equal(from, 0);
  if (stuck) {
    from = 1;
  }
  let scaled = multiply(from, 16807);
  let right = random_seed_modulus();
  let stepped = modulo(scaled, right);
  return stepped;
}
