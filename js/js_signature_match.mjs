import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { object_copy } from "./object_copy.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { js_fold_unify_use } from "./js_fold_unify_use.mjs";
export function js_signature_match(pattern, target, params, binding) {
  arguments_assert(arguments, 4);
  let pattern_callee = property_get(pattern, "callee");
  let missing_callee = null_is(pattern_callee);
  if (missing_callee) {
    return null;
  }
  let target_callee = property_get(target, "callee");
  let callee_equal = equal(pattern_callee, target_callee);
  if (not(callee_equal)) {
    return null;
  }
  let pattern_args = property_get(pattern, "args");
  let target_args = property_get(target, "args");
  let arity_equal = equal(list_size(pattern_args), list_size(target_args));
  if (not(arity_equal)) {
    return null;
  }
  let binding_so_far = binding;
  let count = list_size(pattern_args);
  let index = 0;
  while (index < count) {
    let pattern_key = list_get(pattern_args, index);
    let target_key = list_get(target_args, index);
    let unified = js_fold_unify_use(
      pattern_key,
      target_key,
      params,
      binding_so_far,
    );
    let failed = null_is(unified);
    if (failed) {
      return null;
    }
    binding_so_far = unified;
    index = index + 1;
  }
  let pattern_name = property_get(pattern, "name");
  let target_name = property_get(target, "name");
  let already_bound = property_exists(binding_so_far, pattern_name);
  if (already_bound) {
    let current = property_get(binding_so_far, pattern_name);
    let consistent = equal(current, target_name);
    if (not(consistent)) {
      return null;
    }
    return binding_so_far;
  }
  let bound = object_copy(binding_so_far);
  property_set(bound, pattern_name, target_name);
  return bound;
}
