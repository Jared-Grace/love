import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { equal } from "./equal.mjs";
export function file_stamps_copied_answer_assert(
  differing,
  checked,
  rounding_up,
) {
  arguments_assert(arguments, 3);
  for (let one of differing) {
    console.log("stamp differs after copy  " + json_to(one));
  }
  console.log("stamps checked across a copy: " + checked);
  if (list_empty_not_is(differing)) {
    throw new Error(
      "file stamps copied gate: " +
        differing.length +
        " of " +
        checked +
        " files stand differently in a copy than where they came from - is the moment a file was written being asked for more finely than taking a folder across can carry?",
    );
  }
  if (equal(rounding_up, 0)) {
    throw new Error(
      "file stamps copied gate: not one of the " +
        checked +
        " files here sits in the half of a millisecond that rounds upward, so cutting the fraction away and rounding it would have given the same answer everywhere and this passed without telling them apart. Are the moments being set as asked for?",
    );
  }
  let r = {
    checked,
    rounding_up,
    differing: 0,
  };
  return r;
}
