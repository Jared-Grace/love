import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { object_copy } from "./object_copy.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
export function js_fold_unify_use(pattern_key, target_key, params, binding) {
  // Unify one argument key of a fold pattern against the target. A HOLE — a param, or a local
  // already bound — binds to the target key, or must equal its existing binding. A CONSTANT —
  // neither a param nor bound (e.g. a literal "1") — must match the target key exactly.
  // Returns the (possibly extended) binding, or null on conflict.
  arguments_assert(arguments, 4);
  let is_param = list_includes(params, pattern_key);
  let is_bound = property_exists(binding, pattern_key);
  let is_hole = is_param || is_bound;
  if (is_hole) {
    if (is_bound) {
      let current = property_get(binding, pattern_key);
      let consistent = equal(current, target_key);
      if (consistent) {
        return binding;
      }
      return null;
    }
    let extended = object_copy(binding);
    property_set(extended, pattern_key, target_key);
    return extended;
  }
  let same = equal(pattern_key, target_key);
  if (same) {
    return binding;
  }
  return null;
}
