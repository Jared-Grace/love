import { arguments_assert } from "./arguments_assert.mjs";
import { example_transform_difference_print } from "./example_transform_difference_print.mjs";
import { equal } from "./equal.mjs";
export function example_compare_verdict(title, got, want) {
  arguments_assert(arguments, 3);
  ("Say whether what an example produced is what it declared, and when it is not,");
  ("say on which line the two parted before answering.");
  ("Both example runners ended in these same five lines - compare, answer pass,");
  ("otherwise print the difference and answer fail - and the two had already drifted");
  ("once: the single-file runner said where it stopped matching for a long time");
  ("before the folder runner learned to. A shared ending that one side improves and");
  ("the other does not is the ordinary way a gate quietly reports less than its twin.");
  ("The verdict words are what a runner hands its caller, so they are decided here");
  ("rather than at each ending.");
  let same_is = equal(got, want);
  if (same_is) {
    let passed = "pass";
    return passed;
  }
  example_transform_difference_print(title, got, want);
  let failed = "fail";
  return failed;
}
