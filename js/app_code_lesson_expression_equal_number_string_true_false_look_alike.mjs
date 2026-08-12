import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_compared } from "./app_code_lesson_expression_equal_number_string_true_false_compared.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_look_alike() {
  arguments_assert(arguments, 0);
  ('a value and the string spelled exactly like it: "5" === 5, or "true" === true. Always false, and the one line the lesson exists for. The word is held as its own code text from the start, so the same word serves both sides - quoted on the left, bare on the right - and the two can never drift apart');
  let word = list_random_item(["1", "2", "5", "true", "false"]);
  let quoted = app_code_string_code(word);
  let code = app_code_lesson_expression_equal_number_string_true_false_compared(
    quoted,
    word,
  );
  return code;
}
