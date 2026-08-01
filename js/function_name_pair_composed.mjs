import { function_name_combine_multiple_concat } from "./function_name_combine_multiple_concat.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { equal } from "./equal.mjs";
export function function_name_pair_composed(name_left, name_right) {
  arguments_assert(arguments, 2);
  ("What a function doing one of these and then the other would be called here.");
  ("This repo names a wrapper by joining the names of the two things it does, and");
  ("drops the second one's opening word when it is the same word the first one opens");
  ("with, because that word says what kind of thing is being worked on and saying it");
  ("twice reads as two of them. Mapping a list and then joining the results is");
  ("list, map, concat, multiple - not list, map, list, concat, multiple.");
  ("It matters that this is a rule rather than a taste, because it makes the name");
  ("askable before the function is written: whether the pair already has a name is");
  ("then a lookup instead of a guess, and guessing is how a function that already");
  ("existed came within one command of being written a second time.");
  let parts_left = function_name_to_parts(name_left);
  let parts_right = function_name_to_parts(name_right);
  let head_left = list_first(parts_left);
  let head_right = list_first(parts_right);
  let shared_is = equal(head_left, head_right);
  let right_rest = parts_right;
  if (shared_is) {
    right_rest = list_skip_1(parts_right);
  }
  let composed = function_name_combine_multiple_concat(parts_left, right_rest);
  return composed;
}
