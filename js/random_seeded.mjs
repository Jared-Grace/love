import { multiply } from "./multiply.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
export function random_seeded(seed) {
  "A random number generator that starts from a seed, so the same seed always gives the same run of numbers. Hands back a function to call for the next one, each between zero and one.";
  "This is what lets generated content be varied AND repeatable at the same time. Plain randomness gives variety and loses repeatability; a fixed pattern gives repeatability and loses variety. Seeded gives both, and re-running the same generation lands on the same answer, so a change in the output means somebody changed the code.";
  "Park-miller, whose multiply never leaves the range a javascript number holds exactly - so it needs no bit twiddling and cannot quietly lose precision.";
  let state = seed;
  function next() {
    let scaled = multiply(state, 16807);
    state = modulo(scaled, 2147483647);
    let r = divide(state, 2147483647);
    return r;
  }
  return next;
}
