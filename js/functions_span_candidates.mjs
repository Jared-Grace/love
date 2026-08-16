import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_span_candidates } from "./function_span_candidates.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_sort_size_reverse } from "./list_sort_size_reverse.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_span_candidates() {
  arguments_assert(arguments, 0);
  ("Every function standing over the ceiling that holds a run of lines the cut would take, with the best such run named by both its ends and by how long the longer of the two pieces would be. Biggest run first.");
  ("Ordered by how much one command takes away, while each run is chosen by what it leaves behind. The two questions are different and both are worth asking: which cut to make in a function is settled by the piece still too long afterwards, and which function to go to first by how much a single command is worth there.");
  ("The twin of the lifting work list, for the shape that one leaves behind. Once the lifting has been done a function with nothing nested in it answers the lifting reading with an empty list and drops off it entirely, while still standing over the ceiling - so a reader working that list alone runs out of work long before the record does.");
  ("A function with no cuttable run in it is left out rather than listed as empty, for the same reason: a row is meant to be a command somebody can run, and one promising ends it cannot give sends a reader at nothing.");
  ("Only the best run is named. Cutting it moves every line after it, so a second row read off the same run would already be describing a function that no longer looks like that - ask again after the cut.");
  ("A function that cannot be read at all is passed over rather than allowed to stop the sweep, because one unreadable file should not cost the answer about all the others.");
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let name of named) {
    async function lambda() {
      let read = await function_span_candidates(name);
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
    let best = list_first(candidates);
    let address_from = property_get(best, "address_from");
    let address_to = property_get(best, "address_to");
    let size = property_get(best, "size");
    let worst = property_get(best, "worst");
    list_add(rows, {
      name,
      address_from,
      address_to,
      size,
      worst,
    });
  }
  let ranked = list_sort_size_reverse(rows);
  return ranked;
}
