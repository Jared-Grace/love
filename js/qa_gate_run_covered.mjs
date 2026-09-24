import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_told_kept } from "./qa_gate_told_kept.mjs";
import { qa_gates_machine } from "./qa_gates_machine.mjs";
import { qa_gates_told } from "./qa_gates_told.mjs";
import { qa_gate_printed_print } from "./qa_gate_printed_print.mjs";
import { qa_gate_failed_assert } from "./qa_gate_failed_assert.mjs";
import { qa_gates_read } from "./qa_gates_read.mjs";
export async function qa_gate_run_covered(covering) {
  "The whole-repo run's answer, given from a judging of a commit that already holds the caller's own - shaped, printed and thrown exactly as a run that asked the frozen copy itself.";
  "The copy is not asked because the commit it would stand on is not the question. The caller wanted to know whether what they committed is sound, and a later commit holding it was already judged; asking again would spend a quarter of an hour on the machine everyone shares to learn what is already written down.";
  "The gates about this machine rather than a commit are still asked here, because they are never written into the record and they take seconds.";
  arguments_assert(arguments, 1);
  let commit = property_get(covering, "commit");
  let entry = property_get(covering, "entry");
  console.log("judged already at " + commit + ", which holds this commit");
  let told = qa_gate_told_kept(entry);
  let machine = qa_gates_machine();
  let here = await qa_gates_told(machine);
  qa_gate_printed_print(told, here);
  qa_gate_failed_assert(told, here, 0, 0);
  console.log("\nall gates passed");
  let gates = qa_gates_read();
  let r = {
    gates: gates.length,
    failed: 0,
    covered: commit,
  };
  return r;
}
