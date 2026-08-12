import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_compared } from "./app_code_lesson_expression_equal_number_string_true_false_compared.mjs";
export function app_code_lesson_expression_equal_number_string_true_false_number_and_true_false() {
  arguments_assert(arguments, 0);
  ("a number against a true or false, with no quotes anywhere: 1 === true. Also always false, and it is here so the rule cannot be read off the quotes alone - a reader who has decided that quotes mean false has nothing to go on in this line");
  let number = list_random_item(["0", "1", "2"]);
  let t = js_keyword_true();
  let f = js_keyword_false();
  let word = list_random_item([t, f]);
  let code = app_code_lesson_expression_equal_number_string_true_false_compared(
    number,
    word,
  );
  return code;
}
