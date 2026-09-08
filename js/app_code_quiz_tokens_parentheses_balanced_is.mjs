import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_quiz_tokens_parentheses_balanced_is(tokens) {
  arguments_assert(arguments, 1);
  ("Whether a row of tiles has its parentheses in an order that could close: no closing one arrives before an opening one is waiting for it, and none is left waiting at the end.");
  ("It is a cheap question asked in front of an expensive one. A row whose parentheses do not close is a line in no language at all, so the reader that parses a row and judges its shape would throw it out anyway - this only saves it the reading. Every row it lets through is still judged in full afterwards, which is why it can make a walk faster and cannot make it wronger.");
  ("A row with no parenthesis in it is balanced, and that is the right answer for it rather than a special case: there is nothing there to be out of order.");
  let opening = "(";
  let closing = ")";
  let depth = 0;
  for (let token of tokens) {
    let opens = equal(token, opening);
    if (opens) {
      depth = add(depth, 1);
      continue;
    }
    let closes = equal(token, closing);
    if (closes) {
      depth = subtract(depth, 1);
      let below = less_than(depth, 0);
      if (below) {
        return false;
      }
    }
  }
  let level = equal(depth, 0);
  return level;
}
