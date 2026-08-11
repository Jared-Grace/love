import { qa_gates_timed_solo_generic } from "./qa_gates_timed_solo_generic.mjs";
import { qa_gates_tree } from "./qa_gates_tree.mjs";
export async function qa_gate_tree_timed_solo() {
  "How long each gate takes inside the frozen copy, one at a time, slowest first.";
  "This is the ranking to act on, because it is taken where the suite runs. The copy is in memory and nobody may write to it, so a name's file is found once and kept - and the folder everybody is editing can promise none of that. A gate timed out there is timed against a slower repo than the one the suite reads, and by a different amount for each gate, so the order itself can come out wrong.";
  "Only the gates the files alone can answer are asked, which is the same list a share of the suite is dealt from. The three that ask about this machine and about where the folder sits are left out, exactly as they are left out of the suite's own run inside the copy.";
  "Asking for this by hand from the living folder measures the living folder, however it is spelled. It has to be started with the copy as its folder, which is what its own caller arranges.";
  let gates = qa_gates_tree();
  let report = await qa_gates_timed_solo_generic(gates);
  return report;
}
