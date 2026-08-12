import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_compared } from "./app_code_lesson_expression_equal_number_string_true_false_compared.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_same_plain() {
  arguments_assert(arguments, 0);
  ("a number or a true or false compared with itself: true. The plain half of the same pairing as same_string");
  let word = list_random_item(["1", "5", "true", "false"]);
  let code = app_code_lesson_expression_equal_number_string_true_false_compared(
    word,
    word,
  );
  return code;
}
