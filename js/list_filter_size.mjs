import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function list_filter_size(list, lambda$item) {
  arguments_assert(arguments, 2);
  ("How many of a list's items a test keeps.");
  ("Counting what matches is asked for far more often than the matches themselves,");
  ("and a caller that only wants the number had to name the kept list anyway just to");
  ("ask it how long it was.");
  let kept = list_filter(list, lambda$item);
  let count = list_size(kept);
  return count;
}
