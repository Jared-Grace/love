import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_said_accused_or_null } from "./qa_gate_said_accused_or_null.mjs";
import { qa_gate_said_accused_or_null_cases } from "./qa_gate_said_accused_or_null_cases.mjs";
export function qa_gate_said_accused_or_null_gate_run() {
  "Gate: each written-down complaint must accuse exactly who the corpus says it accuses, and nobody where it says nobody. Throws so the dispatcher seam exits nonzero.";
  "This reading stands between a gate's complaint and the decision to deploy one app, and it runs over whatever a gate happened to throw - so nothing it produces can be checked against a separate account of the same text. This corpus is where it is answerable.";
  "The failure that matters is silent in both directions. Accuse too narrowly and an app deploys over a fault the gate did report; accuse too widely and an app is held out of a deployment for a name it merely carries, by a fault it cannot see and cannot repair.";
  let cases = qa_gate_said_accused_or_null_cases();
  function answer(c) {
    let said = property_get(c, "said");
    let accused = qa_gate_said_accused_or_null(said);
    return accused;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "accused",
    "why",
    "qa gate said accused or null",
  );
  return r;
}
