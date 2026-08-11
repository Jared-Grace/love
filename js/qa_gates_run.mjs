import { function_paths_frozen_enable } from "./function_paths_frozen_enable.mjs";
import { qa_gates_told } from "./qa_gates_told.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function qa_gates_run(gates) {
  "Asks every gate in a list and complains if any of them do";
  "Which gates to ask is the caller's to choose, because not every gate answers a question about the code - one asks the machine and two ask where the folder sits, and none of the three can be asked of a copy";
  "Both callers run inside the frozen copy, so this is the place to say that the folders cannot change: nothing may be written there while it is read, and the neighbours are frozen beside it. Saying it lets where each function lives be worked out once per name rather than once per asking, which was one look on disk per repository, nearly thirty-two thousand of them for every gate in the list";
  "It is safe to say here without checking who is asking, because saying it is not the same as it being believed - the saying is looked at where it lands, and a process standing in the folder people are editing is refused. So a gate run by hand from there is slow, never wrong";
  function_paths_frozen_enable();
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
