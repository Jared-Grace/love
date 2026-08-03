import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { qa_gate_said_advice_remove_cases } from "./qa_gate_said_advice_remove_cases.mjs";
import { qa_gate_said_advice_remove } from "./qa_gate_said_advice_remove.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_said_advice_remove_gate_run() {
  "Gate: each written-down complaint must give up exactly what the corpus says is left of it once the advice is taken out. Throws so the dispatcher seam exits nonzero.";
  "The taking-out stands between a gate's complaint and the decision to deploy one app, and it runs over whatever a gate happened to print - so nothing it produces can be checked against a separate account of the same text. This corpus is where it is answerable.";
  "The failure that matters is silent in both directions. Take too much and a real offender disappears, and an app deploys over a fault the gate did report; take too little and an ordinary word holds every app out of a deployment, which is what happened before this existed.";
  let cases = qa_gate_said_advice_remove_cases();
  function answer(c) {
    let said = property_get(c, "said");
    let left = qa_gate_said_advice_remove(said);
    return left;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "left",
    "why",
    "qa gate said advice remove",
  );
  return r;
}
