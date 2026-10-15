import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_rows_uploaded_defects_cases } from "./giveaway_psalms_rows_uploaded_defects_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_rows_uploaded_defects } from "./giveaway_psalms_rows_uploaded_defects.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_rows_uploaded_defects_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the freeze over the boxes already given away names the fault each written case says it names. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE GATE ON THE FREEZE, AND IT IS THE ONLY EVIDENCE THE FREEZE WORKS AT ALL. No chapter has been uploaded yet, so run against the real record the freeze holds nothing and says nothing, and would say exactly the same if it had stopped working. These cases are where a frozen name is actually seen to be held and a free one actually seen to be let go.");
  let cases = giveaway_psalms_rows_uploaded_defects_cases();
  function answer(c) {
    let rows_before = property_get(c, "rows_before");
    let rows_after = property_get(c, "rows_after");
    let chapters_uploaded = property_get(c, "chapters_uploaded");
    let defects = giveaway_psalms_rows_uploaded_defects(
      rows_before,
      rows_after,
      chapters_uploaded,
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
    "giveaway psalms rows uploaded defects",
  );
  return r;
}
