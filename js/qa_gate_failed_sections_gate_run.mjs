import { property_get } from "./property_get.mjs";
import { qa_gate_failed_sections } from "./qa_gate_failed_sections.mjs";
import { qa_gate_failed_sections_cases } from "./qa_gate_failed_sections_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_gate_failed_sections_gate_run() {
  "QA gate: every complaint a gate run printed is read back whole, and belongs to the gate that made it";
  "What this protects is not the reading but the thing downstream of it, where an empty answer is spent as caution rather than reported as a fault. A complaint read back short names nobody, a gate that names nobody cannot be shown to be about somewhere else, and so it holds every app - which looks exactly like a careful gate doing its job and never like a reader that stopped early.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = qa_gate_failed_sections_cases();
  function answer(c) {
    let output = property_get(c, "output");
    let sections = qa_gate_failed_sections(output);
    return sections;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "sections",
    "name",
    "gate failed sections",
  );
  return r;
}
