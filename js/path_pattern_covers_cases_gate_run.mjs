import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { path_pattern_covers_cases } from "./path_pattern_covers_cases.mjs";
import { path_pattern_covers_is } from "./path_pattern_covers_is.mjs";
import { property_get } from "./property_get.mjs";
export function path_pattern_covers_cases_gate_run() {
  "QA gate: each written-out pattern reaches exactly the files the corpus says it reaches";
  "this reader is what decides whether an allow rule counts as granting the file that decides what is auto-approved, and its two ways of drifting cost opposite things - reading too widely fails a build over rules that grant nothing of the sort, and reading too narrowly leaves open the one grant that can widen itself. So the cases fail in both directions.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = path_pattern_covers_cases();
  function lambda(c) {
    let pattern = property_get(c, "pattern");
    let path = property_get(c, "path");
    let covers = path_pattern_covers_is(pattern, path);
    return covers;
  }
  let r = cases_gate_run_generic(
    cases,
    lambda,
    "covers",
    "name",
    "path pattern covers",
  );
  return r;
}
