import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { qa_gate_miscounted_keys } from "./qa_gate_miscounted_keys.mjs";
import { qa_gates_names } from "./qa_gates_names.mjs";
export async function qa_gates_miscounted_walked() {
  "Every part of every gate's answer that is named for how much it looked at while holding how much was wrong, and how many gates were opened to say so. Read-only.";
  "The sibling sweep asks which gates say nothing at all, and a gate leaves that list the moment one honest count appears in its answer. This one keeps reading after that point, because the two are independent: a gate can hand back the number of files it opened, honestly, and call the number beside it the amount checked while that number is its offenders.";
  "The roster is read off the file the whole-repo gate lists them in rather than written down again here, so a gate joins this the moment it joins that.";
  "How many gates were asked comes back with the answer, for the same reason the answer is about at all. A sweep over words that promise a reading, itself saying nothing about whether it read anything, would be the very thing it was built to name.";
  arguments_assert(arguments, 0);
  let names = await qa_gates_names();
  let offenders = [];
  let walked = 0;
  for (let name of names) {
    let found = await qa_gate_miscounted_keys(name);
    walked = walked + 1;
    list_add_multiple(offenders, found);
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
