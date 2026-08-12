import { js_statements_span_outputs_cases } from "./js_statements_span_outputs_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_statements_span_outputs_cases_gate_run() {
  "QA gate: each run of lines written down in the corpus hands back the names that corpus says it hands back";
  "This is the decision every cut rests on, and it is the one place a cut can go wrong without saying so. Handing back too few leaves the lines behind reading a name that left with the span - which at least stops loudly. Handing back too many writes a call passing a name nothing has bound, which also stops, but only when that line is reached and by then the cut is committed and looks clean.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_statements_span_outputs_cases();
  function answer(c) {
    let span_code = property_get(c, "span");
    let tail_code = property_get(c, "tail");
    let span = property_get(js_parse(span_code), "body");
    let tail = property_get(js_parse(tail_code), "body");
    let outputs = js_statements_span_outputs(span, tail);
    return outputs;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "outputs",
    "name",
    "span outputs",
  );
  return r;
}
