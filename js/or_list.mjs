import { arguments_assert } from "./arguments_assert.mjs";
export function or_list(values) {
  arguments_assert(arguments, 1);
  ("$plain values");
  ("Whether any one of the given answers is yes.");
  ("The two-way or, asked of as many as you like. Four tests joined two at a time come out as three named steps, and two of the three names are for the halves rather than for the question - left and right, or notation and missing - so the function ends in a shape that says only where the joining happened to be split. That shape is the same wherever it turns up, which is how two functions with nothing else in common came to end identically.");
  ("Yes or no is returned rather than the first answer that was yes, which is where this parts company with the two-way or. Asking whether any of them holds is a question with two answers, and handing back one of the values instead would let a caller read a meaning out of which test happened to be first.");
  let any = false;
  for (let value of values) {
    if (value) {
      any = true;
    }
  }
  return any;
}
