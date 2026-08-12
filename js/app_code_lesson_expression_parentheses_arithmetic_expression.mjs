import { app_code_operator_code_subject_first } from "./app_code_operator_code_subject_first.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_parentheses_arithmetic_group } from "./app_code_lesson_expression_parentheses_arithmetic_group.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_to } from "./text_to.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
export function app_code_lesson_expression_parentheses_arithmetic_expression(
  group_first,
) {
  arguments_assert(arguments, 1);
  ("the group times a number, with the group on the left when group_first and on the right otherwise");
  let inner = app_code_lesson_expression_parentheses_arithmetic_group();
  let input = integer_random(2, 5);
  let outer = text_to(input);
  let times = js_operator_asterisk_symbol();
  let code = app_code_operator_code_subject_first(
    group_first,
    inner,
    outer,
    times,
  );
  return code;
}
