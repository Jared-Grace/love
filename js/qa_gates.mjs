import { guard_gate_run } from "./guard_gate_run.mjs";
import { examples_gate_run } from "./examples_gate_run.mjs";
import { permission_gate_run } from "./permission_gate_run.mjs";
import { app_shared_prefixes_invalid_assert } from "./app_shared_prefixes_invalid_assert.mjs";

// Every repo-wide gate qa_gate_run runs. A gate is a zero-argument async
// function that prints its own detail and throws if anything failed.
export function qa_gates() {
  let gates = [guard_gate_run, examples_gate_run, permission_gate_run];
  return gates;
}
