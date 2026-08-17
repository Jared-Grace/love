import { list_sort_size_reverse } from "./list_sort_size_reverse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_lift_candidates_generic(candidates_fn) {
  arguments_assert(arguments, 1);
  ("Every function standing over the ceiling that holds a closure the handed-in reading would move, with the biggest such closure named and sized. Biggest closure first.");
  ("There are two readings of one function and so there were two walks of the whole repo, alike in everything but the one line that asks. The walk is the part worth keeping in one place: which functions to ask about, what to do with one that cannot be read at all, which of the answers to keep, and the ordering. Written twice, an improvement to the walk reaches one of the two readings and the other quietly stays behind.");
  ("A function with nothing liftable in it is left out rather than listed as zero. What it needs is one of the other two shapes, and a row promising a name it cannot give would send a reader at the wrong command.");
  ("Only the biggest candidate is named. Lifting it changes both numbers, so a second name read from the same run would already be answering a question about a function that no longer exists in that form - ask again after the cut.");
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let name of named) {
    async function lambda() {
      let read = await candidates_fn(name);
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
