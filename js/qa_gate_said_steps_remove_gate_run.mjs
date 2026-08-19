import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_said_steps_remove } from "./qa_gate_said_steps_remove.mjs";
import { qa_gate_said_steps_remove_cases } from "./qa_gate_said_steps_remove_cases.mjs";
export function qa_gate_said_steps_remove_gate_run() {
  "Gate: each written-down complaint must give up exactly what the corpus says is left of it once the chain it printed is taken out. Throws so the dispatcher seam exits nonzero.";
  "The taking-out stands between a gate's complaint and the decision to deploy one app, and it runs over whatever a gate happened to print - so nothing it produces can be checked against a separate account of the same text. This corpus is where it is answerable.";
  "The failure that matters is silent in both directions. Cut too much and a real offender disappears, and an app deploys over a fault the gate did report; cut too little and an app is held out of a deployment for a name it merely lies on the way to, by a fault it cannot see and cannot repair.";
  let cases = qa_gate_said_steps_remove_cases();
  function answer(c) {
    let said = property_get(c, "said");
    let left = qa_gate_said_steps_remove(said);
    return left;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "left",
    "why",
    "qa gate said steps remove",
  );
  return r;
}
