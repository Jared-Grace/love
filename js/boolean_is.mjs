import { equal } from "./equal.mjs";
export function boolean_is(value) {
  "Whether a value is a real true or false, rather than something that merely behaves like one.";
  "The distinction only matters at a SEAM, and there it decides everything. A command line hands every argument over as text, so the word false arrives as a nonempty string - and a nonempty string is TRUTHY, so a caller written as `if (value)` reads that word as yes and takes the branch it names the opposite of. Asking the type is the one form of the question no string can pass.";
  let b = equal(typeof value, "boolean");
  return b;
}
