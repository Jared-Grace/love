import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_string_concat_pair } from "./app_code_lesson_expression_string_concat_pair.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_compared } from "./app_code_lesson_expression_equal_number_string_true_false_compared.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_same_string() {
  arguments_assert(arguments, 0);
  ("one word from the shared verse compared with itself, quotes and all: true, because both sides are strings and the text matches. The screen needs a true line whose two sides are both strings, or every quoted example on it would be false and the quotes would look like the thing that makes an answer false");
  let two = app_code_lesson_expression_string_concat_pair();
  let word = list_get(two, 0);
  let quoted = app_code_string_code(word);
  let code = app_code_lesson_expression_equal_number_string_true_false_compared(
    quoted,
    quoted,
  );
  return code;
}
