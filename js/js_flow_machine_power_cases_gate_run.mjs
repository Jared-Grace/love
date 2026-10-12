import { property_get } from "./property_get.mjs";
import { js_flow_code_returns_power } from "./js_flow_code_returns_power.mjs";
import { js_flow_machine_power_cases } from "./js_flow_machine_power_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_flow_machine_power_cases_gate_run() {
  "QA gate: a handle on the machine handed back by a function is still seen as a power, and a plain answer of a machine method is still seen as data.";
  "THIS ONE IS HELD BECAUSE ITS FAULT IS SILENT. A handle let through as data makes the edit check say yes to an edit it should have shown the human, and nothing else in the repo would notice: the edit lands, every other gate stays green.";
  "Throws so the dispatcher seam exits nonzero.";
  function answer(one_case) {
    let source = property_get(one_case, "source");
    let power = js_flow_code_returns_power(source);
    return power;
  }
  let cases = js_flow_machine_power_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "power",
    "why",
    "whether a function's answer still holds the machine",
  );
  return r;
}
