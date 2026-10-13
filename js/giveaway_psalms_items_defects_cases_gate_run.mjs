import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_items_defects_cases } from "./giveaway_psalms_items_defects_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_items_defects } from "./giveaway_psalms_items_defects.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_items_defects_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the check standing between a file quietly replacing another file in its box and the public names the fault each written case says it names. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE GATE ON THE GATE, AND IT IS HERE BECAUSE THE OTHER ONE CANNOT FAIL ON ITS OWN DATA. The shelf it reads has no collision in it, so it passes by saying nothing, and a check that had stopped working would pass in exactly the same way. These cases are the only place the fault is ever seen, so they are the only evidence that a file about to be swallowed would be caught rather than waved through.");
  let cases = giveaway_psalms_items_defects_cases();
  function answer(c) {
    let items = property_get(c, "items");
    let defects = giveaway_psalms_items_defects(items);
    let faults = list_map_property(defects, "fault");
    let joined = list_join_comma(faults);
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "faults",
    "why",
    "giveaway psalms items defects",
  );
  return r;
}
