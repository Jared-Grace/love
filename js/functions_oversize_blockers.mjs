import { function_lift_candidates } from "./function_lift_candidates.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { function_span_candidates } from "./function_span_candidates.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { function_span_cut_skip_or_null } from "./function_span_cut_skip_or_null.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_oversize_blockers() {
  arguments_assert(arguments, 0);
  ("For every function still standing over the ceiling, what is actually stopping it from getting shorter: how many of the runs offered in it the cut would take, how many it steps over for the name they would carry, how many it steps over for the line they start on, and how many pieces the lift would take out of it.");
  ("Both walks are asked, because a function neither of them can touch reads exactly like a function waiting on a name until the second one is asked. One measured on 2026-08-19 offered the cut four runs and had every one of them stepped over for the name, which is the shape of something a person could unblock in a minute by choosing three words. It was nothing of the kind: its whole body was one closure it hands back, the lift refused all three pieces inside it because they write to names outside themselves, and no name anybody chose would have moved it. A count from one walk alone sends a reader at work that is not there.");
  ("What the sweep leaves behind is a count of functions and nothing about why, and the two reasons it steps over a run want completely different things done about them. A run stepped over for its name waits on somebody to choose one, which is a person's work and cannot be automated at all. A run stepped over for where it starts waits on nothing: the walk goes straight on to the next run offered in the same function, so that reason costs a cut only where every other run in that function was stepped over too.");
  ("Reading the sweep's own list cannot tell those apart, because it hands back every reason from every function in one heap with no function beside them. Counted per function they separate at once - a function whose runs are all stepped over for the name is waiting on a person, and one with a cuttable run left in it is waiting on nothing and should not be on the list.");
  ("Nothing is written and nothing is moved. Every reading here is the same one the sweep makes before it cuts, asked without cutting.");
  ("A function that cannot be read at all is passed over rather than allowed to end the count, because one unreadable file should not cost the answer about all the others.");
  let named = await functions_work_oversize_names();
  let rows = [];
  for (let f_name of named) {
    async function lambda() {
      let read = await function_span_candidates(f_name);
      return read;
    }
    let candidates = await catch_null_async(lambda);
    let unreadable_is = null_is(candidates);
    if (unreadable_is) {
      continue;
    }
    let cuttable = 0;
    let starting = 0;
    let naming = 0;
    for (let row of candidates) {
      let address_from = property_get(row, "address_from");
      let address_to = property_get(row, "address_to");
      let skip = await function_span_cut_skip_or_null(
        f_name,
        address_from,
        address_to,
      );
      let taken_is = null_is(skip);
      if (taken_is) {
        cuttable = add(cuttable, 1);
        continue;
      }
      let about = property_get(skip, "about");
      let start_is = equal(about, "start");
      if (start_is) {
        starting = add(starting, 1);
        continue;
      }
      naming = add(naming, 1);
    }
    async function lambda_lift() {
      let read = await function_lift_candidates(f_name);
      return read;
    }
    let lifts = await catch_null_async(lambda_lift);
    let liftable = 0;
    let lifts_read_is = null_not_is(lifts);
    if (lifts_read_is) {
      liftable = list_size(lifts);
    }
    list_add(rows, {
      f_name,
      cuttable,
      starting,
      naming,
      liftable,
    });
  }
  return rows;
}
