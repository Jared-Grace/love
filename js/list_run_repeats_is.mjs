import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function list_run_repeats_is(list, start, length) {
  "Whether the run of a given length starting at a given place is followed immediately by the same run over again.";
  "IT IS ASKED OF ONE PLACE AND ONE LENGTH rather than searching for a repeat itself, because whoever is searching knows which lengths are worth asking about and this does not. Kept apart, the walk over places and lengths is a loop anybody can read, and this is a comparison that cannot get the walk wrong.";
  "NOTHING IS READ PAST THE END. The caller is the one that knows how long the list is, so it is the caller that must not ask about a run whose repeat would run off the end.";
  arguments_assert(arguments, 3);
  let index = 0;
  while (less_than(index, length)) {
    let left = list_get(list, start + index);
    let right = list_get(list, start + length + index);
    let same_is = equal(left, right);
    if (not(same_is)) {
      return false;
    }
    index = index + 1;
  }
  return true;
}
