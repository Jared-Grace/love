import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_shares_print(told) {
  arguments_assert(arguments, 1);
  ("Shows how long each share of the gates took, on every run rather than only on a failing one.");
  ("It is a verdict and not a dump, which is why it prints where everything else the gates said does not. A dozen lines saying whether the work was divided evenly is the same size as an answer; the hundreds of lines the gates themselves printed are not, and a green run rightly throws those away.");
  ("The run that most needs these numbers is the green one. A badly divided run passes exactly as a well divided one does, so the imbalance leaves no other trace at all - and shown only beside failures, it was being read by somebody who had come to read the failures. Measured before this: the slowest share took three hundred and twenty eight seconds against an even division of sixty six, and that four and a half times had nowhere to be seen on any run that worked.");
  ("A run read back out of the record has no shares to show, because no share was ever asked - the answer came from a commit somebody else already paid for. That is said by showing nothing rather than by an empty block, since an empty block reads as a run whose shares all took no time.");
  let known = property_exists(told, "shares");
  if (not(known)) {
    return false;
  }
  let taken = property_get(told, "shares");
  console.log(taken);
  return true;
}
