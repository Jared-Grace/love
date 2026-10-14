import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_descriptions_defects_cases } from "./giveaway_psalms_descriptions_defects_cases.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_descriptions_defects } from "./giveaway_psalms_descriptions_defects.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_descriptions_defects_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the check standing between a box that cannot say what is in it and the public names the fault each written case says it names. Throws so the dispatcher seam exits nonzero.");
  ("★ THIS IS THE GATE ON THE GATE, AND IT IS HERE BECAUSE THE OTHER ONE CANNOT FAIL ON ITS OWN DATA. The shelf it reads describes itself from end to end, so it passes by saying nothing, and a check that had stopped working would pass in exactly the same way. These cases are the only place either fault is ever seen, so they are the only evidence that a box about to be published without saying what is in it would be caught rather than waved through.");
  ("★ ONE OF THE TWO FAULTS CANNOT BE REACHED FROM THE REAL SHELF AT ALL, WHICH MAKES THESE CASES ITS ONLY HOME. Nothing gets into the record without a kind off the fixed list, so no shelf this repo builds can hold a kind the list has not got - the fault is still worth watching, because a hand-written row or a fifth kind added without words to say it does not break the paragraph, it quietly shortens it.");
  let cases = giveaway_psalms_descriptions_defects_cases();
  function answer(c) {
    let items = property_get(c, "items");
    let defects = giveaway_psalms_descriptions_defects(items);
    let faults = list_map_property(defects, "fault");
    let joined = list_join_comma(faults);
    return joined;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "faults",
    "why",
    "giveaway psalms descriptions defects",
  );
  return r;
}
