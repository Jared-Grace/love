import { functions_span_cut_report } from "./functions_span_cut_report.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_span_candidates } from "./functions_span_candidates.mjs";
import { function_span_cut_pass } from "./function_span_cut_pass.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_span_cut_all() {
  arguments_assert(arguments, 0);
  ("Walks every function standing over the ceiling that holds a cuttable run, cutting each one out under a name worked out from the word its last line ends on, and asks the list once more at the end.");
  ("The repo-wide half of the cut, and the twin of the lifting walk beside it. That one has taken every closure it can reach, so what is left standing over the ceiling is what this is for: the straight runs of work between the closures, which are what most of a long body here is actually made of.");
  ("Each function is walked to a standstill before the next one is started, because a cut inside one function cannot change what is cuttable inside another. That is what lets this be one pass over the list rather than the repeat-until-nothing-moves the lifting walk needs - there, moving the biggest piece out of a function changes what its second biggest is, so the list itself is only ever true of its first row.");
  ("A function that cannot be read at all is passed over rather than allowed to end the sweep, because one unreadable file should not cost the answer about all the others. A run that the cut refuses is a different thing and is not caught: everything before it is already committed, and the refusal is a finding.");
  ("It asks the list once more at the end. The rows left are the functions still standing over the ceiling with a run in them nobody could name, which is the work this cannot do and a person can.");
  let ranked = await functions_span_candidates();
  let walked = list_map_property_unique(ranked, "name");
  let cut = [];
  let skipped = [];
  for (let f_name of walked) {
    async function lambda() {
      let one = await function_span_cut_pass(f_name);
      return one;
    }
    let pass = await catch_null_async(lambda);
    let missing = null_is(pass);
    if (missing) {
      continue;
    }
    let pass_cut = property_get(pass, "cut");
    let pass_skipped = property_get(pass, "skipped");
    for (let row of pass_cut) {
      let f_name_new = property_get(row, "f_name_new");
      list_add(cut, {
        f_name,
        f_name_new,
      });
    }
    list_add_multiple(skipped, pass_skipped);
  }
  let r = await functions_span_cut_report(cut, skipped);
  return r;
}
