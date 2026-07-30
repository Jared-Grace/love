import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { permission_settings_allow_drift_cases } from "./permission_settings_allow_drift_cases.mjs";
import { permission_settings_allow_drift_verdict } from "./permission_settings_allow_drift_verdict.mjs";
export function permission_settings_allow_drift_cases_gate_run() {
  "QA gate: each written-out difference between the settings file and the JS list earns exactly the verdict the corpus says";
  "This reader decides whether a gate quietly repairs itself or stops and asks a human, so the two ways it can drift cost opposite things - repairing an addition hands out a grant nobody gave, and refusing a rename takes the standing approvals off renaming, which is the whole reason it was built";
  "So the cases fail in both directions: three must be repaired and three must be refused, and the two hand-written rules pin the case a count alone would get wrong - that a rule which names no dispatcher function can never be paid for by a name that left";
  "Throws so the dispatcher seam exits nonzero";
  let cases = permission_settings_allow_drift_cases();
  let r = cases_gate_run_generic(
    cases,
    permission_settings_allow_drift_verdict,
    "verdict",
    "name",
    "allow drift verdict",
  );
  return r;
}
