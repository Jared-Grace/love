import { qa_commit_named_entry_stale_cases } from "./qa_commit_named_entry_stale_cases.mjs";
import { property_get } from "./property_get.mjs";
import { qa_commit_named_entry_stale_is } from "./qa_commit_named_entry_stale_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_commit_named_entry_stale_gate_run() {
  "Gate: each written-down judgement must be forgotten or kept exactly as the corpus says. Throws so the dispatcher seam exits nonzero.";
  "Forgetting decides what every deployment is answered out of. Forget too little and a record nobody can trust goes on answering; that is the silent direction, because a stale entry looks exactly like a sound one from the outside.";
  "It asks its question in a moment. Reaching the same judgement through its caller means a record on disk and a commit judged against it, which is a quarter of an hour.";
  let cases = qa_commit_named_entry_stale_cases();
  function answer(c) {
    let entry = property_get(c, "entry");
    let stale = qa_commit_named_entry_stale_is(entry);
    return stale;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "stale",
    "why",
    "qa commit named entry stale",
  );
  return r;
}
