import { qa_gates } from "./qa_gates.mjs";
import { list_add } from "./list_add.mjs";

// The repo-wide correctness gate (alias `q`). Runs every gate in qa_gates(),
// sequentially so their output stays readable, and keeps going after a
// failure so one red gate never hides another. Throws at the end if any
// gate failed, so the r.mjs seam exits nonzero.
export async function qa_gate_run() {
  let failed = [];
  for (let gate of qa_gates()) {
    console.log("\n=== " + gate.name + " ===");
    try {
      await gate();
    } catch (e) {
      list_add(failed, gate.name);
      console.log("GATE FAILED  " + gate.name + ": " + e.message);
    }
  }
  if (failed.length > 0) {
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
  console.log("\nall gates passed");
  return { gates: qa_gates().length, failed: 0 };
}
