import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
export function app_learn_js_review_seed_inputs_missing_is(lesson, seed) {
  arguments_assert(arguments, 2);
  ("whether seed names a lesson that needs its inputs handed back but carries none - a seed saved on a device before seeds carried inputs, which would throw when rebuilt");
  let restores = property_exists(lesson, "inputs_restore");
  let carried = property_exists(seed, "inputs");
  let missing = restores && not(carried);
  return missing;
}
