import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_classed } from "./app_code_operators_classed.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { app_code_operators_by_rank } from "./app_code_operators_by_rank.mjs";
import { lists_index_including } from "./lists_index_including.mjs";
export function app_code_operator_rank(symbol) {
  arguments_assert(arguments, 1);
  ("how early an operator is worked out, as a number that can be compared: ! and Math.floor come out highest, then the power sign, then * / and the remainder, then + and -, then a comparison, then &&, and || lowest of all at 0");
  ("The classes already had names. What they did not have was an ORDER, and a line built as a shape has to be printed back as text with parentheses exactly where a reader would otherwise take the parts in the wrong order - which is a question about which of two operators is stronger, not about which class either one is in.");
  ("Only the order of these numbers means anything, and nothing anywhere reads one of them as a number: a caller asks whether one rank is below another, or for the rank just above the strongest. So the classes are kept in an order and the place a class sits in that order IS its number - a class put in the middle renumbers everything above it for free.");
  ("A SYMBOL NO CLASS HOLDS IS REFUSED. It used to come back as a comparison, because the comparisons were what was left when nothing else matched - and a class reached only by falling through cannot be told apart from an operator nobody has classed at all. The remainder sign and the power sign both sat in that hole, along with the two loose equality signs, and the printer wrote the shape 14 % (4 * 2) as the line 14 % 4 * 2 and the shape (2 ** 3) ** 2 as the line 2 ** 3 ** 2. Both lines mean something else. The repair is a membership test against every class there is, which is what this is; a better guess would have been the same fault in a new place.");
  ("The refusal is unreachable today, and that is what it is for. Every operator the app can work out is in a class, so nothing a lesson builds can reach it - it fires the day somebody teaches the app an operator and forgets to say how strong it is, which is exactly the day the printer would otherwise start lying.");
  let classed = app_code_operators_classed();
  let classed_is = list_includes(classed, symbol);
  assert_json(classed_is, {
    symbol,
    classed,
    hint: "no strength class holds this operator, so how early it is worked out cannot be said. add it to the class javascript works it out alongside - guessing here prints a line that means something other than the shape it came from",
  });
  let classes = app_code_operators_by_rank();
  let rank = lists_index_including(classes, symbol);
  return rank;
}
