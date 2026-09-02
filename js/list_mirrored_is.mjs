import { arguments_assert } from "./arguments_assert.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
export function list_mirrored_is(list) {
  "Whether a list reads the same backwards as forwards. 7, 6, 6, 7 does and 7, 7, 6, 6 does not.";
  "A list of one, and an empty list, both read the same either way and answer yes.";
  arguments_assert(arguments, 1);
  let backwards = list_copy_reverse(list);
  let mirrored = lists_equal_pair(list, backwards);
  return mirrored;
}
