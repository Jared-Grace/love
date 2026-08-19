import { functions_span_cut_report } from "./functions_span_cut_report.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_span_cut_one } from "./function_span_cut_one.mjs";
import { functions_span_candidates } from "./functions_span_candidates.mjs";
import { functions_work_size_ceiling } from "./functions_work_size_ceiling.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_span_cut_finishing() {
  arguments_assert(arguments, 0);
  ("Takes the one cut that finishes the job out of every function standing over the ceiling where such a cut exists - the run whose going leaves both pieces under the ceiling - and asks the list once more at the end.");
  ("The narrow half of the sweep beside it, and worth having as its own command because the two are worth quite different amounts. A cut leaving forty-one where fifty stood has taken a name off no list and left a second function behind to read; a cut leaving thirty-eight has taken the whole job away. Measured on 2026-08-19 the repo held twenty-three functions over the ceiling with a cuttable run and six of them where one cut finished it, so the difference between the two walks is most of the work for almost none of the gain.");
  ("One cut per function and no loop, which is the whole of what the name promises. A function whose leftover already stands under the ceiling is not a job any more, and going on cutting it would break work nobody had asked to have broken up - the wide sweep is where that belongs, under a reader who wants it.");
  ("Which cut finishes is read rather than chosen: the list beside this one already names the best run in each function by how long the longer piece would be, and a piece shorter than the ceiling is exactly a piece nobody has to cut again. So no number is written down here, and the ceiling is asked where it is kept.");
  ("Each cut goes into the log under its own name and its own two ends as it lands, so a reader can take them one at a time and disagree with any one of them without touching the rest.");
  ("Nothing is caught. A run this cannot take stops the walk with every cut before it already committed, and the reason said out loud.");
  let ceiling = functions_work_size_ceiling();
  let ranked = await functions_span_candidates();
  let cut = [];
  let skipped = [];
  for (let row of ranked) {
    let worst = property_get(row, "worst");
    let finishing_is = less_than(worst, ceiling);
    if (not(finishing_is)) {
      continue;
    }
    let f_name = property_get(row, "name");
    let address_from = property_get(row, "address_from");
    let address_to = property_get(row, "address_to");
    let outcome = await function_span_cut_one(f_name, address_from, address_to);
    ("A reason not to have cut carries no word about whether one was made, so the reading is asked in the forgiving way and a missing answer counts with the refusals.");
    let cut_is = property_get_or_null(outcome, "cut_is");
    if (cut_is) {
      list_add(cut, outcome);
      continue;
    }
    list_add(skipped, outcome);
  }
  let r = await functions_span_cut_report(cut, skipped);
  return r;
}
