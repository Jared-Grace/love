import { property_get } from "./property_get.mjs";
import { qa_commit_entry_beside_moved } from "./qa_commit_entry_beside_moved.mjs";
import { qa_commit_entry_beside_moved_cases } from "./qa_commit_entry_beside_moved_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_commit_entry_beside_moved_cases_gate_run() {
  "QA gate: each answer in the corpus names exactly the neighbours the corpus says moved.";
  "This is the only place a caller is told why a quarter of an hour of judging happened, and a wrong answer here is invisible - naming the wrong neighbour sends somebody to look at a repo that never moved, and naming none reads as the record having held nothing at all.";
  "Throws so the dispatcher seam exits nonzero";
  function answer(c) {
    let remembered = property_get(c, "remembered");
    let heads = property_get(c, "heads");
    let moved = qa_commit_entry_beside_moved(remembered, heads);
    return moved;
  }
  let cases = qa_commit_entry_beside_moved_cases();
  let r = cases_gate_run_generic(cases, answer, "moved", "why", "beside moved");
  return r;
}
