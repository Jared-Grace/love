import { arguments_assert } from "./arguments_assert.mjs";
import { word_root_cases } from "./word_root_cases.mjs";
import { word_root } from "./word_root.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function word_root_cases_gate_run() {
  "QA gate: two forms of one English word reach the same root, and two different words do not.";
  "The half that would rot unnoticed is the pairs that must stay apart. A word wrongly joined to another invents a match between a passage and a sermon line, and nothing further down can tell an invented match from a real one - it simply reports the line as easier than it is. A missed join is visible by comparison: it only ever under-counts.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = word_root_cases();
  function answer(c) {
    let a = word_root(property_get(c, "a"));
    let b = word_root(property_get(c, "b"));
    let met = equal(a, b);
    return met;
  }
  let r = cases_gate_run_generic(cases, answer, "meet", "why", "word root");
  return r;
}
