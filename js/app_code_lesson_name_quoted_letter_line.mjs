import { arguments_assert } from "./arguments_assert.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_style_normal_span } from "./app_code_style_normal_span.mjs";
export function app_code_lesson_name_quoted_letter_line(
  parent,
  name_source,
  name_copy,
) {
  arguments_assert(arguments, 3);
  ("the last line of the box about quote marks: what the very same line would do if the name on the right of it had quote marks round it - it would put that one letter in the cup");
  ("Written as a supposing rather than as a statement. With quote marks this line would... reads as a second line the lesson is teaching, and a learner carries both away; if this name had quote marks round it then... names it as the thing that is not being done, and the line is met as already ruled out.");
  ("The quote mark is shown on its own before the whole line is shown with it. The difference between the two lines is one pair of characters, and a learner who is shown only the two whole lines has to find that difference; shown the character first, they are looking for something they have already been handed.");
  ("The letter at the end is dressed as a value and not as code. Everywhere else on these screens a letter in code dress is a NAME, and this is the one place the same letter means the character itself - so in code dress it would be the same picture saying the opposite thing. The value dress is the one a written-out answer wears, which is what this letter would be: the thing that ends up in the cup.");
  let quote = js_string_quote();
  let quoted = app_code_string_code(name_source);
  let line_quoted = js_code_let_statement(name_copy, quoted);
  let line = html_div(parent);
  html_span_text(line, "If ");
  html_span_text_code_dark(line, name_source);
  html_span_text(line, " had quote marks ");
  html_span_text_code_dark(line, quote);
  html_span_text(line, " around it ");
  html_span_text_code_dark(line, line_quoted);
  html_span_text(line, " then that would put the letter ");
  app_code_style_normal_span(line, name_source);
  html_span_text(line, " in the cup instead");
  return line;
}
