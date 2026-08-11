import { qa_gates_dealt_answer } from "./qa_gates_dealt_answer.mjs";
import { qa_gates_dealt_cases } from "./qa_gates_dealt_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_gates_dealt_gate_run() {
  "QA gate: splitting the gates into shares deals every gate exactly once, and leaves the heaviest one carrying nothing else";
  "The suite is asked as several runs side by side and each is handed a share. Nothing downstream ever checks that the shares add back up to the whole list, and nothing could: a gate that was dealt to nobody is not asked, says nothing, and is counted as having passed. A suite quietly asking less than it claims is the one fault here that reads as good news, so it is checked where the splitting happens";
  "Throws so the dispatcher seam exits nonzero";
  let cases = qa_gates_dealt_cases();
  let r = cases_gate_run_generic(
    cases,
    qa_gates_dealt_answer,
    "dealt",
    "name",
    "qa gates dealt",
  );
  return r;
}
