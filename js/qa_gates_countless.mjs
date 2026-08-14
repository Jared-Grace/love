import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
import { qa_gate_counted_is } from "./qa_gate_counted_is.mjs";
import { qa_gate_counted_depth } from "./qa_gate_counted_depth.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
export async function qa_gates_countless() {
  "Which gates say nothing about how much they reached, so a run of theirs that found nothing cannot be told from a run that looked at nothing. Read-only.";
  "Every gate here passes by finding no offenders, and finding no offenders is also what a gate does when its sweep has been pointed at a name that has moved, an index built a new way, or a folder that is no longer there. The verdict is the same word in both cases. A count of what was walked is the only thing that has ever separated them, and it separates them by falling to nothing on the day the reading breaks while the verdict stays green.";
  "The roster is read off the file the whole-repo gate lists them in rather than written down again here, so a gate joins this the moment it joins that.";
  "How many were asked comes back with the answer, for the same reason the answer is about at all - this is a sweep like any other, and a sweep saying nothing is wrong while reaching nobody would be the very thing it was built to name.";
  arguments_assert(arguments, 0);
  let names = await qa_gates_names();
  let depth = qa_gate_counted_depth();
  let countless = [];
  for (let name of names) {
    let counted_is = await qa_gate_counted_is(name, depth);
    if (not(counted_is)) {
      list_add(countless, name);
    }
  }
  let walked = {
    gates: list_size(names),
    countless,
  };
  return walked;
}
