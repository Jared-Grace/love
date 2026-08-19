import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { qa_gate_said_listed_cases } from "./qa_gate_said_listed_cases.mjs";
import { qa_gate_said_listed } from "./qa_gate_said_listed.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_said_listed_cases_gate_run() {
  "QA gate: every complaint in the corpus gives up exactly the offenders the corpus says it holds.";
  "What this reader answers decides whether a red gate can be placed somewhere else, and a gate that cannot be placed holds every app in the repo back. Wrong one way it blocks a deployment for work that could never reach it; wrong the other way it lets a gate about the very app being shipped read as somebody else's business.";
  "It is pinned because it rests on the shape gates happen to print rather than on anything the repo promises. A gate adding a line of its own printing, or writing an offender under a new word, would not go red anywhere - the reading would simply stop finding anyone, which looks exactly like a run with nothing wrong in it.";
  "Throws so the dispatcher seam exits nonzero";
  function answer(c) {
    let said = property_get(c, "said");
    let listed = qa_gate_said_listed(said);
    return listed;
  }
  let cases = qa_gate_said_listed_cases();
  let r = cases_gate_run_generic(cases, answer, "listed", "why", "said listed");
  return r;
}
