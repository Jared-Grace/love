import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export function qa_gate_miscounted_keys_name_add(names, f_name, key) {
  "$plain f_name";
  "$plain key";
  "Add one miscounted part of a gate's answer to the list, written as the gate and the key joined by a space.";
  "The four ways a key is found to be lying end the same two lines, and the two lines have to agree on how the pair is spelled or the same fault reads as two different offenders depending on which branch caught it. A ratchet compares those spellings against a written record, so a branch spelling it differently would show up as one name gone and one name new on a run where nothing had changed.";
  arguments_assert(arguments, 3);
  let pair = text_combine_multiple([f_name, " ", key]);
  list_add(names, pair);
}
