import { app_code_lesson_name_quoted_letter_line } from "./app_code_lesson_name_quoted_letter_line.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_span_text_highlight } from "./app_code_span_text_highlight.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
export function app_code_lesson_name_no_quotes_box(
  root,
  name_source,
  name_copy,
  word_source,
) {
  arguments_assert(arguments, 4);
  ("the box that says what the quote marks are doing on the line that fills one cup from another: with them the line puts a letter in the cup, without them it puts in what the cup of that name is holding");
  ("The whole lesson turns on one pair of characters, and a learner who has only ever seen quote marks as decoration round a word will read the line without them as the same line. So the line is shown both ways, one under the other, and what each one does is said in the same breath.");
  ("The wrong one is shown last rather than first. Shown first it is the shape a learner carries down the screen, and every question after it is read through the mistake; shown last it is met as something already ruled out.");
  ("The word inside wears the coloured tile, as it does on the screen about which name comes out, because it is the same distinction said again - what is being talked about is the thing in the cup and not the writing on the cup.");
  ("What is actually in the cup is named at the end of the second line rather than left to be remembered. Everything else on the line is said in names - the cup called this gets what is inside the cup called that - and a learner can follow all of it without once holding in mind what that cup has in it, which is the one thing the line is about.");
  let box = app_code_container_light_blue(root);
  let quoted_word = app_code_string_code(word_source);
  let line_plain = js_code_let_statement(name_copy, name_source);
  let line_one = html_div(box);
  html_span_text(line_one, "The name ");
  html_span_text_code_dark(line_one, name_source);
  html_span_text(line_one, " in ");
  html_span_text_code_dark(line_one, line_plain);
  html_span_text(line_one, " has no quote marks round it");
  let line_two = html_div(box);
  html_span_text(line_two, "So the cup called ");
  html_span_text_code_dark(line_two, name_copy);
  html_span_text(line_two, " gets what is ");
  app_code_span_text_highlight(line_two, "inside");
  html_span_text(line_two, " the cup called ");
  html_span_text_code_dark(line_two, name_source);
  html_span_text(line_two, " (");
  html_span_text_code_dark(line_two, quoted_word);
  html_span_text(line_two, " are inside ");
  html_span_text_code_dark(line_two, name_source);
  html_span_text(line_two, ")");
  app_code_lesson_name_quoted_letter_line(box, name_source, name_copy);
  return box;
}
