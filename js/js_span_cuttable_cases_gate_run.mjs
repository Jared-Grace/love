import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_code_span_cuttable_is } from "./js_code_span_cuttable_is.mjs";
import { js_span_cuttable_cases } from "./js_span_cuttable_cases.mjs";
import { property_get } from "./property_get.mjs";
export function js_span_cuttable_cases_gate_run() {
  "QA gate: the reading that decides whether a run of lines may be pulled out into a function of its own answers every case in the corpus the way the corpus says.";
  "Standing here because every way this reading can be wrong is a quiet one. Let a bad run through and the cut is made, the file loads, the gates stay green, and a value somewhere else is read forever as it stood before somebody touched it. Refuse a good one and nothing at all happens - the run is simply never offered again.";
  "The same reading the cut itself refuses on, asked here without being stopped by the answer. So a case passing here is a promise about the cut, not only about the proposer.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_span_cuttable_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let from = property_get(c, "from");
    let to = property_get(c, "to");
    let cuttable = js_code_span_cuttable_is(code, from, to);
    return cuttable;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "cuttable",
    "name",
    "span cuttable",
  );
  return r;
}
