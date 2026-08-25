import { js_statements_span_repack_only_is_cases } from "./js_statements_span_repack_only_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_statements_span_repack_only_is } from "./js_statements_span_repack_only_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_statements_span_repack_only_is_cases_gate_run() {
  "QA gate: each run of lines written down in the corpus is called a piece holding no work exactly when that corpus says it is";
  "This reading decides whether a run is offered at all, and it is one-sided on purpose: calling an honest run a repack holds a real cut back for good, and nobody is told. The cases are what keep that one-sidedness from quietly turning into a reading that refuses everything.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_statements_span_repack_only_is_cases();
  function answer(c) {
    let span_code = property_get(c, "span");
    let tail_code = property_get(c, "tail");
    let object = js_parse(span_code);
    let span = property_get(object, "body");
    let object2 = js_parse(tail_code);
    let tail = property_get(object2, "body");
    let repack_only_is = js_statements_span_repack_only_is(span, tail);
    return repack_only_is;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "repack_only_is",
    "name",
    "span repack only",
  );
  return r;
}
