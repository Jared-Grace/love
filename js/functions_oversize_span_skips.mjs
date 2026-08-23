import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_span_candidates } from "./function_span_candidates.mjs";
import { function_span_cut_skip_or_null } from "./function_span_cut_skip_or_null.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export async function functions_oversize_span_skips() {
  "For every function still standing over the ceiling, each run of lines the cut is offered in it and the reason it would be stepped over - or nothing, where the cut would take it.";
  "IT IS THE WALK ITSELF AND COUNTS NOTHING. Two readings want it and want different tallies out of it: one asks per function whether anything is left that a cut could take, the other asks across the whole repo which reason turns runs down most often. Written into either of them the walk would have to be written into both, and the second one drifting from the first would be a measurement of a walk nobody runs.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED. Every reading here is the same one the sweep makes before it cuts, asked without cutting.";
  "THE RUN COMES BACK BESIDE ITS ANSWER RATHER THAN THE ANSWER ALONE. A reason for stepping over a run says which word turned it down and not which run was turned down, so a reading that wants to offer the same run a line shorter has no way back to the run from the answer about it.";
  "A FUNCTION THAT CANNOT BE READ AT ALL IS PASSED OVER rather than allowed to end the count, because one unreadable file should not cost the answer about all the others.";
  arguments_assert(arguments, 0);
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let f_name of named) {
    async function read_lambda() {
      let read = await function_span_candidates(f_name);
      return read;
    }
    let candidates = await catch_null_async(read_lambda);
    let unreadable_is = null_is(candidates);
    if (unreadable_is) {
      continue;
    }
    let skips = [];
    for (let row of candidates) {
      let address_from = property_get(row, "address_from");
      let address_to = property_get(row, "address_to");
      let skip = await function_span_cut_skip_or_null(
        f_name,
        address_from,
        address_to,
      );
      list_add(skips, {
        address_from,
        address_to,
        skip,
      });
    }
    list_add(rows, {
      f_name,
      skips,
    });
  }
  return rows;
}
