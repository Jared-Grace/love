import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { ternary } from "./ternary.mjs";
export function numbers_smaller(first, second) {
  arguments_assert(arguments, 2);
  ("$plain first");
  ("$plain second");
  ("Whichever of two numbers is the smaller, and the second of them when they are equal.");
  ("THE OTHER HALF OF A PAIR THE REPO ONLY HAD ONE OF. Keeping the largest seen so far was already one named line here; keeping the smallest was still three written out, and a reader meeting the two side by side in the same piece of work had to read one of them closely and the other not at all.");
  ("The second is handed back on a tie rather than the first, which cannot matter for a number, and is said the same way round as its sibling says it so that the pair cannot be read as disagreeing about anything.");
  let lesser = less_than(first, second);
  let smaller = ternary(lesser, first, second);
  return smaller;
}
