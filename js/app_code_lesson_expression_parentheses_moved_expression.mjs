import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_expression_parentheses_moved_arrange } from "./app_code_lesson_expression_parentheses_moved_arrange.mjs";
export function app_code_lesson_expression_parentheses_moved_expression(
  group_first,
) {
  arguments_assert(arguments, 1);
  ("a + b * c with the ( and ) around either the a + b or the b * c. Every number is 2..5, so both placements stay whole and above zero and their two answers can never coincide");
  let a = integer_random(2, 5);
  let b = integer_random(2, 5);
  let c = integer_random(2, 5);
  let code = app_code_lesson_expression_parentheses_moved_arrange(
    a,
    b,
    c,
    group_first,
  );
  return code;
}
