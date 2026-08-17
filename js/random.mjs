import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_get } from "./random_seed_get.mjs";
import { equal } from "./equal.mjs";
import { random_seed_step } from "./random_seed_step.mjs";
import { random_seed_set } from "./random_seed_set.mjs";
import { divide } from "./divide.mjs";
import { random_seed_modulus } from "./random_seed_modulus.mjs";
export function random() {
  "a number from nought up to one. Drawn fresh, unless this page is carrying a seed - then it is the next number of the run that seed starts, and opening the same page again draws exactly the same numbers over again.";
  "every random thing here comes through this one function, which is why seeding it seeds everything at once. A whole app can then be walked twice and the two walks compared: a screen that reads differently the second time reads differently because somebody changed it, not because it happened to draw a different word.";
  "this one is reached while the repo's own tools are running, so its imports are written by hand and never left to be filled in later - a missing one here stops the very pass that would have added it.";
  arguments_assert(arguments, 0);
  let seed = random_seed_get();
  let unseeded = equal(seed, null);
  if (unseeded) {
    let fresh = Math.random();
    return fresh;
  }
  let stepped = random_seed_step(seed);
  random_seed_set(stepped);
  let bottom = random_seed_modulus();
  let r = divide(stepped, bottom);
  return r;
}
