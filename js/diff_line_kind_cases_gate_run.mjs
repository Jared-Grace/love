import { diff_line_kind_cases } from "./diff_line_kind_cases.mjs";
import { property_get } from "./property_get.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function diff_line_kind_cases_gate_run() {
  "QA gate: each changed line written down in the corpus is called the kind of thing the corpus says it is";
  "THE FAILURE IT EXISTS FOR IS SILENT AND WAS REAL. Calling a record entry a paragraph broke nothing, threw nothing and printed nothing wrong - it only made a count four times larger than the truth, and a count is believed. Three of the eight cases are record entries for that reason.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = diff_line_kind_cases();
  function answer(c) {
    let line = property_get(c, "line");
    let kind = diff_line_kind(line);
    return kind;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "kind",
    "name",
    "diff line kind",
  );
  return r;
}
