import { qa_gates_told } from "./qa_gates_told.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function qa_gates_run(gates) {
  "Asks every gate in a list and complains if any of them do";
  "Which gates to ask is the caller's to choose, because not every gate answers a question about the code - one asks the machine and two ask where the folder sits, and none of the three can be asked of a copy";
  let told = await qa_gates_told(gates);
  let failed = property_get(told, "failed");
  if (greater_than(failed.length, 0)) {
    throw new Error("qa gate: " + failed.join(", ") + " failed");
  }
  console.log("\nall gates passed");
  let timings = property_get(told, "timings");
  let r = {
    gates: gates.length,
    failed: 0,
    timings: timings,
  };
  return r;
}
