import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function word_is_are(count) {
  "the verb 'is' when count is 1, otherwise 'are', for subject-verb agreement with a counted noun";
  let one = equal(count, 1);
  let verb = ternary(one, "is", "are");
  return verb;
}
