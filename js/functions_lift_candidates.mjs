import { list_sort_size_reverse } from "./list_sort_size_reverse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_lift_candidates } from "./function_lift_candidates.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_lift_candidates() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling that holds a closure the lift would actually move, with the biggest such closure named and sized. Biggest closure first.");
  ("The work list the size record could not be. The record says which functions are too long; the nesting report says how much of that length is folded inside something; this says which name to hand the lift, so a row here is already a command rather than a reading to act on later.");
  ("A function with nothing liftable in it is left out rather than listed as zero. What it needs is one of the other two shapes, and a row promising a name it cannot give would send a reader at the wrong command.");
  ("Only the biggest candidate is named. Lifting it changes both numbers, so a second name read from the same run would already be answering a question about a function that no longer exists in that form - ask again after the cut.");
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let name of named) {
    async function lambda() {
      let read = await function_lift_candidates(name);
      return read;
    }
    let candidates = await catch_null_async(lambda);
    let missing = null_is(candidates);
    if (missing) {
      continue;
    }
    let empty_is = list_empty_is(candidates);
    if (empty_is) {
      continue;
    }
    let biggest = list_first(candidates);
    let nested = property_get(biggest, "name");
    let size = property_get(biggest, "size");
    let closed = property_get(biggest, "closed");
    list_add(rows, {
      name,
      nested,
      size,
      closed,
    });
  }
  let ranked = list_sort_size_reverse(rows);
  return ranked;
}
