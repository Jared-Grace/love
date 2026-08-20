import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { command_grantable_run_name } from "./command_grantable_run_name.mjs";
import { command_grantable_run_name_cases } from "./command_grantable_run_name_cases.mjs";
import { property_get } from "./property_get.mjs";
import { set_add } from "./set_add.mjs";
import { set_new } from "./set_new.mjs";
export function command_grantable_run_name_cases_gate_run() {
  "QA gate: each written-down command line is answered with the one function the corpus says a rule would have to name for it to stop asking.";
  "The ranking of what still interrupts the human is built on this reading, and a row it declines to name is a row no grant is ever offered for. So the case that matters most is the pipeline: it looks chained and is answerable by one grant, and reading it the other way silently shortens the list the human is asked to approve.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = command_grantable_run_name_cases();
  function answer(c) {
    let allow_verbs = set_new();
    for (let verb of property_get(c, "verbs")) {
      set_add(allow_verbs, verb);
    }
    let command = property_get(c, "command");
    let named = command_grantable_run_name(command, allow_verbs);
    return named;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "run_name",
    "name",
    "grantable run name",
  );
  return r;
}
