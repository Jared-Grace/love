import { arguments_assert } from "./arguments_assert.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export function red_proof_holes_exemptions(allowed, unrefused) {
  "Separates the wrong versions nothing refused into the ones let off by name and the ones nobody accounted for, and reports the let-offs that carry no reason or are no longer needed.";
  arguments_assert(arguments, 2);
  let allowed_names = properties_get(allowed);
  let holes = [];
  for (let wrong_name of unrefused) {
    let b = list_includes(allowed_names, wrong_name);
    if (not(b)) {
      list_add(holes, wrong_name);
    }
  }
  let exemptions_stale = [];
  let exemptions_unreasoned = [];
  for (let allowed_name of allowed_names) {
    let b2 = list_includes(unrefused, allowed_name);
    if (not(b2)) {
      list_add(exemptions_stale, allowed_name);
    }
    let reason = property_get(allowed, allowed_name);
    if (not(reason)) {
      list_add(exemptions_unreasoned, allowed_name);
    }
  }
  let r = {
    holes,
    exemptions_stale,
    exemptions_unreasoned,
  };
  return r;
}
