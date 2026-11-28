import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_js_review_seed_inputs_restore(lesson, seed) {
  arguments_assert(arguments, 2);
  ("hands lesson back the inputs seed carries, written by ",
    fn_name("app_learn_js_review_seed_inputs_add"),
    ", so a fresh lesson can build the wrong answers for a question it never made");
  let restores = property_exists(lesson, "inputs_restore");
  let carried = property_exists(seed, "inputs");
  if (restores && carried) {
    let inputs_restore = property_get(lesson, "inputs_restore");
    let inputs = property_get(seed, "inputs");
    inputs_restore(inputs);
  }
}
