import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_string_shape } from "./app_code_string_shape.mjs";
export function app_code_lesson_expression_string_hello_intro(
  root,
  quote,
  code,
) {
  arguments_assert(arguments, 3);
  ("the first box: names the string, shows that the same mark opens it and closes it, shows the shape with a faded stand-in where any text may go, then one real example. The word string is bolded here, the one place it is introduced.");
  let intro = app_code_container_light_blue(root);
  let name_line = html_div(intro);
  html_span_text(name_line, "In JS, text is called a ");
  let term = html_span_text(name_line, "string");
  html_bold(term);
  let marks = html_div(intro);
  html_span_text(marks, "A ");
  html_span_text_code_dark(marks, quote);
  html_span_text(marks, " marks the start of a string, and the same ");
  html_span_text_code_dark(marks, quote);
  html_span_text(marks, " marks the end");
  let shape_line = html_div(intro);
  html_span_text(shape_line, "A string looks like this: ");
  app_code_string_shape(shape_line, 1);
  let example_line = html_div(intro);
  html_span_text(example_line, "Here is an example string: ");
  html_span_text_code_dark(example_line, code);
}
