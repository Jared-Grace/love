import { path_outward_cases } from "./path_outward_cases.mjs";
import { property_get } from "./property_get.mjs";
import { path_outward_is } from "./path_outward_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function path_outward_cases_gate_run() {
  "QA gate: every word the corpus writes down is read the way it says it should be read. Throws so the dispatcher seam exits nonzero.";
  "WHAT THIS CATCHES IS A CHECK THAT HAS STOPPED DISAGREEING. The rule this reading serves looks for a path written into a commit message, and over the whole history it is pointed at it finds none - so it is green whether it works or not, and a reading that had quietly started answering no to everything would look exactly as it does now. The frame refuses a corpus whose cases all want the same answer, which is the half that cannot be faked: a reading narrowed until it finds nothing turns this red at once.";
  let cases = path_outward_cases();
  function answer(c) {
    let word = property_get(c, "word");
    let outward = path_outward_is(word);
    return outward;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "outward",
    "why",
    "path outward",
  );
  return r;
}
