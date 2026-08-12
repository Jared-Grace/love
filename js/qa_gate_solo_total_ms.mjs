import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_read } from "./qa_gate_timings_read.mjs";
import { object_values } from "./object_values.mjs";
import { list_sum } from "./list_sum.mjs";
export async function qa_gate_solo_total_ms() {
  arguments_assert(arguments, 0);
  ("How long every gate takes added together, each one timed with nothing else running.");
  ("It is what the whole run would cost with one processor and no waiting for anything, so it is the number every other number about the run is worth reading against. Divided by the shares it says what an even division would come to; beside what a share actually took it says how much of the wait was not the work.");
  ("A gate nobody has timed adds nothing here, and that is honest rather than convenient: this is a reading of the record, and the record saying nothing about a gate is not the same as the gate being free. Whoever wants it complete times the gates again.");
  let known = await qa_gate_timings_read();
  let each = object_values(known);
  let total = list_sum(each);
  return total;
}
