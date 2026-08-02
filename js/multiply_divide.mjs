import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { divide } from "./divide.mjs";
export function multiply_divide(left, right, bottom) {
  arguments_assert(arguments, 3);
  ("Two numbers multiplied, and what they came to divided by a third.");
  ("The shape a share is scaled in. A count out of a total, said in hundredths, is the");
  ("count times a hundred over the total; a bar's filled width is the part times the");
  ("width over the whole. The product in the middle is a step, never an answer.");
  let product = multiply(left, right);
  let scaled = divide(product, bottom);
  return scaled;
}
