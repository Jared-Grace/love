import { less_than } from "./less_than.mjs";
import { property_equals } from "./property_equals.mjs";
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
  "Decides whether one line of a candidate body says the same thing as one line of the pattern being looked for, and hands back what the two now agree the pattern's names stand for.";
  "The function being called has to be the same function in both, and the count of arguments the same, before any name is looked at. Those two are what the line does; only the things it does it to are open to standing for something else.";
  "The arguments are agreed one at a time, each able to add to the agreement the one before it left, so a name met twice in the pattern must be the same name both times in the candidate. The name the line puts its own result into is agreed last, after the arguments have been - until they have, there is nothing yet saying these are the same line.";
  "Any disagreement anywhere hands back nothing at all rather than saying where it was. The caller is trying candidate after candidate until one fits, so which part failed would be of no use to it.";
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
  let left = list_size(pattern_args);
  let right = list_size(target_args);
  let arity_equal = equal(left, right);
  if (not(arity_equal)) {
    return null;
  }
  let binding_so_far = binding;
  let count = list_size(pattern_args);
  let index = 0;
  while (less_than(index, count)) {
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
    let consistent = property_equals(binding_so_far, pattern_name, target_name);
    if (not(consistent)) {
      return null;
    }
    return binding_so_far;
  }
  let bound = object_copy(binding_so_far);
  property_set(bound, pattern_name, target_name);
  return bound;
}
