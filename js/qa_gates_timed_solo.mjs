import { qa_gates } from "./qa_gates.mjs";
import { qa_gates_timed_solo_generic } from "./qa_gates_timed_solo_generic.mjs";
export async function qa_gates_timed_solo() {
  "How long every gate takes with nothing else running, slowest first, asked of the folder as it stands.";
  "It exists because the question kept being answered by hand, with a shell loop that started a fresh node for every gate. That loop timed the process starts as much as the gates, left nothing behind to run again, and had to be approved every time it was written out; this is one call, in one process, that anybody can repeat.";
  "The total comes back with the ranking because the hand-rolled version always ended by adding the printed numbers up. Two questions get asked together - which gate to make faster, and whether the set is worth attacking at all - so answering only the first sent every reader back to a sum over the printed lines.";
  "Ranking what the suite actually spends its time on is the other one to reach for, and it is not this one - the suite runs inside a frozen copy, and a copy is faster to read than the folder everybody is writing to. This asks about here.";
  let gates = qa_gates();
  let report = await qa_gates_timed_solo_generic(gates);
  return report;
}
