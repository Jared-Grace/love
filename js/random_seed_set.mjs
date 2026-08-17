import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_name } from "./random_seed_name.mjs";
import { property_set } from "./property_set.mjs";
export function random_seed_set(seed) {
  "leave a seed on this page, so every number drawn from here on comes out of the run that seed starts";
  arguments_assert(arguments, 1);
  let name = random_seed_name();
  property_set(globalThis, name, seed);
}
