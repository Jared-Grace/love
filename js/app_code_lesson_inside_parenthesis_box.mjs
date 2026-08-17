import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_span_text_code_highlight } from "./app_code_span_text_code_highlight.mjs";
import { app_code_span_text_highlight } from "./app_code_span_text_highlight.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_lesson_inside_parenthesis_box(
  root,
  name_written,
  name_other,
) {
  arguments_assert(arguments, 3);
  ("the box that says which of two names on a screen comes out: the one inside the parenthesis, and not the one beside it");
  (
    "Said by colour as well as by words. The word inside and the name in the middle of the line of code are given the same coloured tile, a line apart, so the English and the code are seen to be the same statement twice - a learner who reads only the words has been told, and a learner who reads only the colours has been told the same thing."
  );
  (
    "The line of code is broken into three pieces for that. Whole, it is one dark chip and the name in the middle of it cannot be coloured differently from the parenthesis around it, which is exactly the difference being pointed at. Split, the middle piece can be the highlighted one and the two outer pieces stay the code they always were."
  );
  (
    "Then the name that does not come out is given, and the reason is given in the same three pieces, so the pieces are what a learner learns to look for rather than a shape they saw once."
  );
  let box_care = app_code_container_light_blue(root);
  let log_name = js_console_log_name();
  let paren_left = js_code_parenthesis_left();
  let paren_right = js_code_parenthesis_right();
  let semicolon = js_code_semicolon();
  (
    "The two outer pieces are written exactly as they would be typed, with no room left inside the parenthesis. A space put there to hold the name apart is dark, because it is inside the chip, so it comes out as a bar of code colour between the parenthesis and the name - which reads as something written rather than as a gap. The chips have room of their own at their edges and that is all the parting the name needs."
  );
  let opened = list_join_empty([log_name, paren_left]);
  let closed = list_join_empty([paren_right, semicolon]);
  (
    "The pair of parenthesis in the sentence is two chips with a plain space between them, not one chip reading \"( )\". There is no such thing in code as an open and a close written together; they are two characters that stand at the two ends of something, and one chip round both says they are a single mark - which is the reading this whole box exists to undo."
  );
  let line_only = html_div(box_care);
  html_span_text(line_only, "Only the name ");
  app_code_span_text_highlight(line_only, "inside");
  html_span_text(line_only, " the parenthesis ");
  html_span_text_code_dark(line_only, paren_left);
  html_span_text(line_only, " ");
  html_span_text_code_dark(line_only, paren_right);
  html_span_text(line_only, " is written out:");
  let line_call = html_div(box_care);
  html_span_text_code_dark(line_call, opened);
  app_code_span_text_code_highlight(line_call, name_written);
  html_span_text_code_dark(line_call, closed);
  let line_other = html_div(box_care);
  html_span_text(line_other, "The other cup ");
  html_span_text_code_dark(line_other, name_other);
  html_span_text(line_other, " is still there, but ");
  html_span_text_code_dark(line_other, name_other);
  html_span_text(line_other, " is not written out because ");
  html_span_text_code_dark(line_other, name_other);
  html_span_text(line_other, " is not ");
  app_code_span_text_highlight(line_other, "inside");
  html_span_text(line_other, " ");
  html_span_text_code_dark(line_other, opened);
  html_span_text(line_other, " and ");
  html_span_text_code_dark(line_other, closed);
  return box_care;
}
