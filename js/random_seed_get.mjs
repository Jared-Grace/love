import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_name } from "./random_seed_name.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function random_seed_get() {
  "the seed this page is carrying, or nothing when it is carrying none";
  "nothing is the ordinary answer: only a run that has asked for the same numbers every time ever puts a seed here, and everywhere else the drawing stays genuinely random";
  arguments_assert(arguments, 0);
  let name = random_seed_name();
  let seed = property_get_or_null(globalThis, name);
  return seed;
}
