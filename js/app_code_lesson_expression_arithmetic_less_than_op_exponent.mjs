import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_get } from "./list_get.mjs";
import { exponent } from "./exponent.mjs";
export function app_code_lesson_expression_arithmetic_less_than_op_exponent() {
  arguments_assert(arguments, 0);
  ("the ** arithmetic piece: a small base to a small power so the result stays small");
  ("The pairs are chosen rather than drawn from two ranges, because two ranges of 2 and 3 made two bad lines out of four. 2 ** 2 is 4, and so are 2 * 2 and 2 + 2, so that line cannot show what ** means. 3 ** 3 puts one number in two places, so a learner cannot tell which 3 is the base and which says how many. In every pair kept here the base and the exponent are different numbers.");
  let pairs = [
    [2, 3],
    [3, 2],
    [4, 2],
    [5, 3],
  ];
  let pair = list_random_item(pairs);
  let base = list_get(pair, 0);
  let power = list_get(pair, 1);
  let value = exponent(base, power);
  let r = {
    left: base,
    right: power,
    symbol: "**",
    value,
  };
  return r;
}
