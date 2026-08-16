import { arguments_assert } from "./arguments_assert.mjs";
import { function_lift_candidates } from "./function_lift_candidates.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_nested_lift } from "./function_nested_lift.mjs";
import { function_nested_lift_wrapper } from "./function_nested_lift_wrapper.mjs";
export async function function_nested_lift_or_wrapper(f_name, nested) {
  "$plain f_name";
  "$plain nested";
  "Which of the two moves to make on one piece written inside another function - the one that takes its name away with it wherever that will go, and the wider one otherwise.";
  "The narrower move rewrites every call and leaves nothing standing, which frees every neighbour that was reaching for the name. The wider one leaves the name on a line calling the moved body, which is the only way to move a piece handed on as a value rather than called - and every neighbour still has to be handed it.";
  "So this is not a preference between two tidy shapes. Taking the name away hands out one parameter fewer per cut and the other hands out one more, which over a walk of a long function is the difference between finishing and not.";
  arguments_assert(arguments, 2);
  let plain = await function_lift_candidates(f_name);
  let plain_names = list_map_property(plain, "name");
  let plain_is = list_includes(plain_names, nested);
  let lift = function_nested_lift_wrapper;
  if (plain_is) {
    lift = function_nested_lift;
  }
  return lift;
}
