import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
export function multiply_add(left, right, addend) {
  arguments_assert(arguments, 3);
  ("Two numbers multiplied, and a third added to what they came to.");
  ("The shape a whole and a part are put back together in. A division that does not");
  ("come out even is the quotient times the divisor with the leftover added on, and a");
  ("row of cells with a gap between each pair is two per cell plus the one on the end");
  ("- both are this, and the product on its own is never wanted.");
  let product = multiply(left, right);
  let sum = add(product, addend);
  return sum;
}
