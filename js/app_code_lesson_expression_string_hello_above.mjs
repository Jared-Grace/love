import { app_code_lesson_expression_string_hello_define } from "./app_code_lesson_expression_string_hello_define.mjs";
import { app_code_lesson_expression_string_hello_intro } from "./app_code_lesson_expression_string_hello_intro.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
export function app_code_lesson_expression_string_hello_above(root, quote) {
  arguments_assert(arguments, 2);
  ("everything above the practice on the string lesson: one box naming the string and showing how one is written, then one box showing what its value is. One word is drawn for the whole screen so both boxes talk about the same fruit of the Spirit.");
  let list = fruits_of_the_spirit();
  let word = list_random_item(list);
  let code = app_code_string_code(word);
  app_code_lesson_expression_string_hello_intro(root, quote, code);
  app_code_lesson_expression_string_hello_define(root, word);
}
