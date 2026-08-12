import { property_get } from "./property_get.mjs";
import { qa_commit_entry_beside_matching_is } from "./qa_commit_entry_beside_matching_is.mjs";
import { qa_commit_entry_beside_matching_cases } from "./qa_commit_entry_beside_matching_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_commit_entry_beside_matching_cases_gate_run() {
  "QA gate: each answer in the corpus is called a match for the neighbours standing there exactly when the corpus says it is.";
  "This reader decides whether a quarter of an hour of judging is run again or handed straight back, so it is the one place a wrong answer is invisible by design - a run that was skipped leaves nothing behind to look at.";
  "Throws so the dispatcher seam exits nonzero";
  function answer(c) {
    let remembered = property_get(c, "remembered");
    let heads = property_get(c, "heads");
    let matching = qa_commit_entry_beside_matching_is(remembered, heads);
    return matching;
  }
  let cases = qa_commit_entry_beside_matching_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "matching",
    "why",
    "beside matching",
  );
  return r;
}
