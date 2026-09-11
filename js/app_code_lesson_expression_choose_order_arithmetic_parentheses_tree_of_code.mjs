import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_size_assert } from "./list_size_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { ternary } from "./ternary.mjs";
import { text_integers } from "./text_integers.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_expression_choose_order_operators_expression_parts } from "./app_code_lesson_expression_choose_order_operators_expression_parts.mjs";
export function app_code_lesson_expression_choose_order_arithmetic_parentheses_tree_of_code(
  code,
) {
  arguments_assert(arguments, 1);
  ("the shape behind a line this lesson printed, worked out again from the line itself: (2 + 6) * 3 gives back the shape whose gathered part is the first two numbers, and 4 * (5 - 3) the one whose gathered part is the last two");
  ("The quiz hands its question over as text, and a line outlives the run that built it - a review saves the line to ask again and comes back to it after the page has been loaded afresh. A shape kept beside the line it printed would have been forgotten by then, and the lesson would throw where a learner was owed a question.");
  ("★ WHICH PART GOES FIRST IS READ OFF THE MARKS, NOT OFF THE SYMBOLS. The lesson next door to this one reads its lines by asking which of the two operators is the stronger, which is the right question there because nothing on those lines says otherwise. Here the marks say otherwise on every line, and they are what the lesson is about: on 4 * (5 - 3) the times is the stronger symbol and it goes second.");
  ("One mark is enough to read the whole line. These lines carry exactly one pair, so the pair either opens the line or stands further along it, and the operator inside it is then the second word or the fourth - a mark glues itself to a number rather than to an operator, so the words the line splits into stand in the same places either way.");
  let pieces = text_split_space(code);
  list_size_assert(pieces, 5);
  let second_piece = list_get(pieces, 1);
  let fourth_piece = list_get(pieces, 3);
  let left_parenthesis = js_code_parenthesis_left();
  let opens_gathered = text_starts_with(code, left_parenthesis);
  let strong_symbol = ternary(opens_gathered, second_piece, fourth_piece);
  let weak_symbol = ternary(opens_gathered, fourth_piece, second_piece);
  let numbers = text_integers(code);
  let left = list_get(numbers, 0);
  let middle = list_get(numbers, 1);
  let right = list_get(numbers, 2);
  let strong_right = not(opens_gathered);
  let tree = app_code_lesson_expression_choose_order_operators_expression_parts(
    left,
    middle,
    right,
    weak_symbol,
    strong_symbol,
    strong_right,
  );
  return tree;
}
