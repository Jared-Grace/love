import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gates_miscounted_walked } from "./qa_gates_miscounted_walked.mjs";
export async function qa_gates_miscounted_gate_run() {
  "Gate: no gate may name a part of its answer for how much it looked at while holding how much was wrong.";
  "Its sibling asks whether a gate says anything about its reading at all, and lets a gate go the moment one honest count turns up. This asks the other question, which that one cannot reach: whether a word promising the looking is sitting over a number that only ever means the offenders. A gate can pass the first and fail this, and the pair of them found six gates between them where a hand count had found two.";
  "Ratcheted against nothing rather than against a record. Every gate this named was repaired before this was written, so there is nothing here to grandfather - and a record seeded at nothing is a file whose only content is that it is empty.";
  "How many gates were opened comes back with the verdict. A sweep for gates that say nothing about their reading, saying nothing about its own, would be the fault wearing the name of the cure.";
  arguments_assert(arguments, 0);
  let told = await qa_gates_miscounted_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "offenders");
  let r = list_empty_is_assert_walked_generic(
    walked,
    offenders,
    "each of these gates names a part of its answer for how much it looked at while what it holds is how much was wrong - so the number reads nothing checked on every run that passes, and reads the same on the run the sweep stopped reaching anything. Give the sweep a count of what it actually opened and hand that back under the word instead",
  );
  return r;
}
