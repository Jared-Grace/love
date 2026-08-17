import { random_seed_step } from "./random_seed_step.mjs";
import { random_seed_modulus } from "./random_seed_modulus.mjs";
import { divide } from "./divide.mjs";
export function random_seed_generator(seed) {
  "A random number generator that starts from a seed, so the same seed always gives the same run of numbers. Hands back a function to call for the next one, each between zero and one.";
  "This is what lets generated content be varied AND repeatable at the same time. Plain randomness gives variety and loses repeatability; a fixed pattern gives repeatability and loses variety. Seeded gives both, and re-running the same generation lands on the same answer, so a change in the output means somebody changed the code.";
  "Park-miller, whose multiply never leaves the range a javascript number holds exactly - so it needs no bit twiddling and cannot quietly lose precision.";
  let state = seed;
  function next() {
    state = random_seed_step(state);
    let bottom = random_seed_modulus();
    let r = divide(state, bottom);
    return r;
  }
  return next;
}
