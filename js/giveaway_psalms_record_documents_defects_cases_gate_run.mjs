import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_record_documents_defects_cases } from "./giveaway_psalms_record_documents_defects_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_record_documents_defects } from "./giveaway_psalms_record_documents_defects.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_record_documents_defects_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the check standing between the written record of the pictures and the timing documents that choose them names the fault each written case says it names. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE GATE ON THE QUESTION NOTHING WAS ASKING, SO IT IS THE WHOLE OF HOW THAT QUESTION IS WATCHED. The report over the real record and the real documents is not registered as a gate while six disagreements stand that only the owner can clear, so until then these cases are the only thing run on every pass. They are also the only place the moved-path fault is ever seen firing, because the real record has none of it and the day it has some is the day it is already too late.");
  ("★ THE CLEAN CASES ARE AS MUCH THE POINT AS THE LOUD ONES. A recording is a row no timing document will ever name, so a check that stopped asking which kind of row it had would call all five hundred and eleven of them undocumented - and this is the question asked immediately before an upload, where five hundred false faults would hide every real one.");
  let cases = giveaway_psalms_record_documents_defects_cases();
  function answer(c) {
    let rows = property_get(c, "rows");
    let rows_documented = property_get(c, "rows_documented");
    let defects = giveaway_psalms_record_documents_defects(
      rows,
      rows_documented,
    );
    let faults = list_map_property(defects, "fault");
    let joined = list_join_comma(faults);
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "faults",
    "why",
    "giveaway psalms record documents defects",
  );
  return r;
}
