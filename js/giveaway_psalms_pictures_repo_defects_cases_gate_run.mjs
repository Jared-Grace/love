import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_pictures_repo_defects_cases } from "./giveaway_psalms_pictures_repo_defects_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_pictures_repo_defects } from "./giveaway_psalms_pictures_repo_defects.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_pictures_repo_defects_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the check standing between a published name with no file behind it and the public names the fault each written case says it names. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE GATE ON A REPORT THAT IS LOUD TODAY AND WILL GO QUIET, WHICH IS THE WORST WAY FOR A CHECK TO BE WATCHED. Seven picture rows really are missing their files, so the report is exercised every time it is run - but all seven are repairs somebody is expected to make, and once they are made the real record says nothing and a check that had stopped working would say the same. These cases are the only place the faults keep being seen.");
  ("★ ONE OF THE CASES CANNOT BE REACHED FROM THE REAL RECORD AT ALL, AND ONE OF THE CLEAN ONES IS THE ONE A REWRITE WOULD BREAK. A pathless picture row cannot be written by anything in this repo, and a recording has no file here to find - so the case that must stay quiet is as much the point as the two that must fire.");
  let cases = giveaway_psalms_pictures_repo_defects_cases();
  function answer(c) {
    let rows = property_get(c, "rows");
    let paths_present = property_get(c, "paths_present");
    let defects = giveaway_psalms_pictures_repo_defects(rows, paths_present);
    let faults = list_map_property(defects, "fault");
    let joined = list_join_comma(faults);
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "faults",
    "why",
    "giveaway psalms pictures repo defects",
  );
  return r;
}
