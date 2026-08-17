import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { text_integers } from "./text_integers.mjs";
export function app_code_division_divisor(code) {
  arguments_assert(arguments, 1);
  ("the number being divided BY in a line of code that divides: 4 out of 14 / 4, and out of Math.floor(14 / 4) * 4 as well");
  ("The second number written down, which is what the divisor is in every shape these lessons put a division in - written plainly, wrapped in Math.floor, or multiplied back out afterwards. It is not the second number in the long remainder formula, where the dividend is written a second time before the divisor is reached, so that one line asks for its divisor by position rather than through here.");
  ("Read out of the line for the same reason its dividend is - the line is all a batch ever spells.");
  let nums = text_integers(code);
  let r = list_get(nums, 1);
  return r;
}
