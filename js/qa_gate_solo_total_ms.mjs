import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_read } from "./qa_gate_timings_read.mjs";
import { qa_gate_timings_naming_no_gate } from "./qa_gate_timings_naming_no_gate.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { object_pick_try_values } from "./object_pick_try_values.mjs";
import { list_sum } from "./list_sum.mjs";
export async function qa_gate_solo_total_ms() {
  arguments_assert(arguments, 0);
  ("How long every gate takes added together, each one timed with nothing else running.");
  ("It is what the whole run would cost with one processor and no waiting for anything, so it is the number every other number about the run is worth reading against. Divided by the shares it says what an even division could come to; beside what a share actually took it says how much of the wait was not the work.");
  ("A gate nobody has timed adds nothing here, and that is honest rather than convenient: this is a reading of the record, and the record saying nothing about a gate is not the same as the gate being free. Whoever wants it complete times the gates again.");
  ("A number in the record under a name no gate answers to is the opposite mistake and is left out. It is time nothing will ever spend again - the gate was renamed after it was timed - and counting it does not merely make the total large, it makes the division look better than it is: the even share is this divided by the number of shares, so every dead second raises the mark the real shares are being measured against and hides that much of what is still left to win. Measured on the fifth of September, four such names carried ninety five seconds, which is about a tenth of the file and near fourteen seconds of headroom that was not there.");
  ("Which names those are is asked of ",
    fn_name("qa_gate_timings_naming_no_gate"),
    " rather than worked out here, because the coverage reading reports the same set and the two saying different things would be worse than either.");
  let known = await qa_gate_timings_read();
  let dead = qa_gate_timings_naming_no_gate(known);
  let recorded = object_property_names(known);
  let live = list_without_multiple(recorded, dead);
  let taken = object_pick_try_values(known, live);
  let total = list_sum(taken);
  return total;
}
