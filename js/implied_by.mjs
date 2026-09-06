import { implies } from "./implies.mjs";
export function implied_by(a, b) {
  "$plain a";
  "$plain b";
  "Whether a is implied by b: true unless b holds and a does not.";
  "THE SAME RULE AS ITS SIBLING, READ FROM THE OTHER END. Which of the two a caller wants is decided by which of its values it already has a name for, and a one-directional rule read backwards at the call site is the easiest kind of mistake to write and the hardest to see - both spellings are a call to the same word with two arguments, and only the order says which way the rule binds. Naming both ends lets the call be written in the order the reader is already thinking in.";
  let r = implies(b, a);
  return r;
}
