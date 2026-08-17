import { property_get } from "./property_get.mjs";
import { app_code_lesson_expression_string_concat_above_space_line } from "./app_code_lesson_expression_string_concat_above_space_line.mjs";
import { app_code_lesson_expression_string_concat_above_after_line } from "./app_code_lesson_expression_string_concat_above_after_line.mjs";
import { app_code_lesson_expression_string_concat_above_right_line } from "./app_code_lesson_expression_string_concat_above_right_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
export function app_code_lesson_expression_string_concat_above(root) {
  arguments_assert(arguments, 1);
  ("anchor on the plus the learner already knows (it adds numbers), then reveal it does something different for strings - it combines them. The value is derived by reducing the combination to a plain string literal they already understand (the value of the two joined is the same as the value of one string written out), then the proper name is attached. Finally the order is made concrete with left and right rather than abstract firsts, and the absence of any space is stated outright.");
  let r = app_code_lesson_expression_string_concat_above_right_line(root);
  let r2 = app_code_lesson_expression_string_concat_above_after_line(r);
  let r3 = app_code_lesson_expression_string_concat_above_space_line(r2);
  let space_line = property_get(r3, "space_line");
  let joined_value = property_get(r3, "joined_value");
  html_span_text(space_line, "There is no space between them: ");
  app_code_string_colored(space_line, joined_value);
}
