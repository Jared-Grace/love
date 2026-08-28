import { arguments_assert } from "./arguments_assert.mjs";
import { usfm_markers_removed_cases } from "./usfm_markers_removed_cases.mjs";
import { property_get } from "./property_get.mjs";
import { usfm_markers_removed } from "./usfm_markers_removed.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function usfm_markers_removed_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: clears the marks off every written-down piece of usfm and holds the words against the writing beside it.");
  ("Reads no file. The marking is written into each case, so this asks the same question in the frozen copy a gate runs in as it does anywhere else, and it asks nothing of any bible download, none of which is in the repo.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = usfm_markers_removed_cases();
  function answer(c) {
    let usfm = property_get(c, "usfm");
    let text = usfm_markers_removed(usfm);
    return text;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "text",
    "why",
    "usfm markers removed",
  );
  return r;
}
