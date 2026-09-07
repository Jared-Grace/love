import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_highlight } from "./app_code_span_text_highlight.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_width_fit_content } from "./html_style_width_fit_content.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_lesson_inside_parenthesis_box(
  root,
  name_written,
  name_other,
) {
  arguments_assert(arguments, 3);
  ("the box that says which of two names on a screen comes out: the one inside the parenthesis, and not the one beside it");
  ("Said by colour as well as by words. The word inside and the name in the middle of the line of code are given the same coloured tile, a line apart, so the English and the code are seen to be the same statement twice - a learner who reads only the words has been told, and a learner who reads only the colours has been told the same thing.");
  ("ONE CHIP, with the colour laid over it. The line is a single black chip at the ordinary code size, exactly like every other piece of code on these screens, and the name inside the parenthesis wears its colour ON that black rather than instead of it. Three chips side by side, each with its own rounding and its own room at the edges, read as three separate pieces of code with gaps in them - and the line being pointed at is one call, written as one thing.");
  ("So the chip is the line and the pieces inside it are bare writing: the black, the code font and the white all come from the one chip, and the name adds a background of its own and nothing else. That is what keeps the black solid all the way across while still letting the one name be a different colour.");
  ("Then the name that does not come out is given, and the reason is given in the same three pieces, so the pieces are what a learner learns to look for rather than a shape they saw once.");
  ("Still there BUT not written out, rather than still there AND not written out. The two are in tension - a cup that is still standing there is exactly the one a learner expects to hear about - and that tension is the whole of what the line has to say. An and puts them side by side as two things that simply both happen, which is the reading where nothing has been learnt.");
  let box_care = app_code_container_light_blue(root);
  let log_name = js_console_log_name();
  let paren_left = js_code_parenthesis_left();
  let paren_right = js_code_parenthesis_right();
  let semicolon = js_code_semicolon();
  ("The two outer pieces are written exactly as they would be typed, with no room left inside the parenthesis. A space put there to hold the name apart is dark, because it is inside the chip, so it comes out as a bar of code colour between the parenthesis and the name - which reads as something written rather than as a gap. The chips have room of their own at their edges and that is all the parting the name needs.");
  let opened = list_join_empty([log_name, paren_left]);
  let closed = list_join_empty([paren_right, semicolon]);
  ('The pair of parenthesis in the sentence is two chips with a plain space between them, not one chip reading "( )". There is no such thing in code as an open and a close written together; they are two characters that stand at the two ends of something, and one chip round both says they are a single mark - which is the reading this whole box exists to undo.');
  let line_only = html_div(box_care);
  html_span_text(line_only, "Only the name ");
  app_code_span_text_highlight(line_only, "inside");
  html_span_text(line_only, " the parenthesis ");
  html_span_text_code_dark(line_only, paren_left);
  html_span_text(line_only, " ");
  html_span_text_code_dark(line_only, paren_right);
  html_span_text(line_only, " is written out:");
  let line_call = html_div(box_care);
  html_style_code_dark(line_call);
  html_style_width_fit_content(line_call);
  html_span_text(line_call, opened);
  let name_span = html_span_text(line_call, name_written);
  let highlight = app_code_highlight_color();
  html_style_background_color_set(name_span, highlight);
  html_span_text(line_call, closed);
  ("THE VALUE OF a is not written out, rather than a is not written out. The name a is written out - it is there on the line, a learner can see it - and what does not come out is what is in the cup it names. Said without those three words the sentence denies something the screen plainly shows, and a learner who notices has been given a reason to distrust the rest of the box.");
  let line_other = html_div(box_care);
  html_span_text(line_other, "The other cup ");
  html_span_text_code_dark(line_other, name_other);
  html_span_text(line_other, " is still there, but the value of ");
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
