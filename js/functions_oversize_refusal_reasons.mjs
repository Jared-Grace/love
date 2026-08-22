import { arguments_assert } from "./arguments_assert.mjs";
import { functions_oversize_span_skips } from "./functions_oversize_span_skips.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function functions_oversize_refusal_reasons() {
  "Which of the reasons for stepping over a run of lines actually turns runs down, counted across every function standing over the ceiling.";
  "A REFUSAL IS WHERE THE TOOLING HANDS THE WORK BACK. Everything a named command turns down gets done by hand instead, so the reason turning down the most runs is the one costing the most hand editing - and it is the next thing worth building a way around. The count beside this one says how many runs a function had turned down; it does not say which reason did it, and the reasons want completely different things done about them.";
  "THE REASON ITSELF IS THE KEY. Each way of stepping over a run says something different in full, and none of them carries a short word for itself - so the sentences are counted as they stand rather than a label being added to each of them for the sake of the count. A label would be a second spelling of the same distinction, free to drift from the sentence a reader is actually shown.";
  arguments_assert(arguments, 0);
  let walked = await functions_oversize_span_skips();
  let reasons = {};
  let runs = 0;
  let cuttable = 0;
  for (let row of walked) {
    let f_name = property_get(row, "f_name");
    let skips = property_get(row, "skips");
    for (let skip of skips) {
      runs = runs + 1;
      let taken_is = null_is(skip);
      if (taken_is) {
        cuttable = cuttable + 1;
        continue;
      }
      let why = property_get(skip, "why");
      let seen = property_exists(reasons, why);
      if (not(seen)) {
        property_set(reasons, why, {
          count: 0,
          samples: [],
        });
      }
      let bucket = property_get(reasons, why);
      bucket.count = bucket.count + 1;
      let few = list_size_less_than_value(bucket.samples, 4);
      if (few) {
        list_add(bucket.samples, f_name);
      }
    }
  }
  let r = {
    functions: walked.length,
    runs,
    cuttable,
    reasons,
  };
  return r;
}
