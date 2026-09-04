import { lists_matched_indexes_cases } from "./lists_matched_indexes_cases.mjs";
import { property_get } from "./property_get.mjs";
import { lists_matched_indexes } from "./lists_matched_indexes.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lists_matched_indexes_cases_gate_run() {
  "QA gate: each pair of readings written down in the corpus is paired the way the corpus says it is";
  "★ THE FAILURE IT EXISTS FOR CANNOT BE SEEN IN ANYTHING THIS PRODUCES. A pairing that slips by one word still hands back a full list of numbers, still places every line of the song, and still reports a match rate high enough to look like agreement; what comes out is a video whose words arrive a line early, and the only reader who would ever notice is a person watching it. A misplaced pairing has no shape of its own to check against.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = lists_matched_indexes_cases();
  function answer(c) {
    let before = property_get(c, "before");
    let after = property_get(c, "after");
    let matched = lists_matched_indexes(before, after);
    return matched;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "matched",
    "name",
    "lists matched indexes",
  );
  return r;
}
