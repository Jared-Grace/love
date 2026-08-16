import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { equal } from "./equal.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
export function app_code_lesson_expression_either_first_expression() {
  arguments_assert(arguments, 0);
  ("four numbers and three operators, a times on each side of a plus, built as a shape rather than typed as text so the quiz can work one operator out at a time: 2 * 3 + 4 * 5");
  ("A times on BOTH sides of the plus is what makes the choice free - both of them have a number standing on each side, so both may be worked out first, while the plus still holds a times on either side and may not. With a times on one side only there is a single operator ready and the order is forced, which is the lesson before this one.");
  ("There is no side to choose here, and so no argument to choose it with. The line is the same shape read from either end, which is the point of it: a learner cannot be right by taking the leftmost or by taking the rightmost, because both are right.");
  ("Numbers up to five rather than up to nine, because two products are added here instead of one. Nine times eight plus seven times six lands past a hundred, and that puts arithmetic in front of the learner where the only thing being asked about is the order.");
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  function side_new() {
    "one of the two multiplications";
    let number = integer_random(2, 5);
    let other = integer_random(2, 5);
    let side = app_code_expression_node(number, times, other);
    return side;
  }
  let left = side_new();
  let left_code = app_code_expression_code(left);
  let right = side_new();
  ("the two multiplications are never written the same, because the lesson names each of them by the little line it is - Take 4 * 2 first - and two rows saying that of the same three symbols name nothing at all");
  while (equal(left_code, app_code_expression_code(right))) {
    right = side_new();
  }
  let tree = app_code_expression_node(left, plus, right);
  return tree;
}
