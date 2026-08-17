import { app_code_lesson_expression_string_concat_above_order } from "./app_code_lesson_expression_string_concat_above_order.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
export function app_code_lesson_expression_string_concat_above(root) {
  arguments_assert(arguments, 1);
  ("anchor on the plus the learner already knows (it adds numbers), then reveal it does something different for strings - it combines them. The value is derived by reducing the combination to a plain string literal they already understand (the value of the two joined is the same as the value of one string written out), then the proper name is attached. Finally the order is made concrete with left and right rather than abstract firsts, and the absence of any space is stated outright.");
  let { code_a, code_b, joined_value, order } =
    app_code_lesson_expression_string_concat_above_order(root);
  let left_line = html_div(order);
  html_span_text(left_line, "The left string is ");
  html_span_text_code_dark(left_line, code_a);
  let right_line = html_div(order);
  html_span_text(right_line, "The right string is ");
  html_span_text_code_dark(right_line, code_b);
  let after_line = html_div(order);
  html_span_text_code_dark(after_line, "+");
  html_span_text(
    after_line,
    " puts the right string immediately after the left string",
  );
  let space_line = html_div(order);
  html_span_text(space_line, "There is no space between them: ");
  app_code_string_colored(space_line, joined_value);
}
