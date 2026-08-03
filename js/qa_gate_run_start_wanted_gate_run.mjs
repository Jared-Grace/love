import { qa_gate_run_start_wanted_cases } from "./qa_gate_run_start_wanted_cases.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_run_start_wanted_generic } from "./qa_gate_run_start_wanted_generic.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_gate_run_start_wanted_gate_run() {
  "Gate: each written-down state of the machine must give the answer the corpus says about whether to start a whole-repo judging. Throws so the dispatcher seam exits nonzero.";
  "Wrong in the yes direction is what actually happened: six judgings at once, each of them then undivided, none under half an hour where one alone takes a minute. Nothing about that looked like a fault while it was happening - every run was working, and working slowly is what a busy machine looks like anyway";
  let cases = qa_gate_run_start_wanted_cases();
  function answer(c) {
    let flight = property_get(c, "flight");
    let wanted = qa_gate_run_start_wanted_generic(flight);
    return wanted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "wanted",
    "why",
    "qa gate run start wanted",
  );
  return r;
}
