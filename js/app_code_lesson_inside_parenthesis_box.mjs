import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_highlight } from "./app_code_span_text_highlight.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_width_fit_content } from "./html_style_width_fit_content.mjs";
import { app_code_code_dark_parts_fill } from "./app_code_code_dark_parts_fill.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span } from "./html_span.mjs";
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
  ("Everything is written exactly as it would be typed, with no room left inside the parenthesis. A space put there to hold the name apart is dark, because it is inside the chip, so it comes out as a bar of code colour between the parenthesis and the name - which reads as something written rather than as a gap. The chips have room of their own at their edges and that is all the parting the name needs.");
  ('The pair of parenthesis in the sentence is two chips with a plain space between them, not one chip reading "( )". There is no such thing in code as an open and a close written together; they are two characters that stand at the two ends of something, and one chip round both says they are a single mark - which is the reading this whole box exists to undo.');
  ("TWO POINTERS AT ONCE, so both colours are on the screen and neither is decoration. The first says which name comes out, and it is worn by the word inside and by the name in the middle of the call. The second says what inside means, and it is worn by the word parenthesis and by every open and close on the screen - the loose pair in the sentence, the two standing round the name in the call, and the two inside the chips at the bottom. A learner who has been told that inside means inside those marks can then find the marks by their colour wherever they next appear.");
  let highlight = app_code_highlight_color();
  let marking = app_code_highlight_color_second();
  let line_only = html_div(box_care);
  html_span_text(line_only, "Only the name ");
  app_code_span_text_highlight(line_only, "inside");
  html_span_text(line_only, " the ");
  app_code_span_text_highlight_color(line_only, "parenthesis", marking);
  html_span_text(line_only, " ");
  html_span_text_code_background(line_only, paren_left, marking);
  html_span_text(line_only, " ");
  html_span_text_code_background(line_only, paren_right, marking);
  html_span_text(line_only, " is written out:");
  let line_call = html_div(box_care);
  html_style_code_dark(line_call);
  html_style_width_fit_content(line_call);
  app_code_code_dark_parts_fill(line_call, [
    [log_name, null],
    [paren_left, marking],
    [name_written, highlight],
    [paren_right, marking],
    [semicolon, null],
  ]);
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
  let chip_opened = html_span(line_other);
  html_style_code_dark(chip_opened);
  app_code_code_dark_parts_fill(chip_opened, [
    [log_name, null],
    [paren_left, marking],
  ]);
  html_span_text(line_other, " and ");
  let chip_closed = html_span(line_other);
  html_style_code_dark(chip_closed);
  app_code_code_dark_parts_fill(chip_closed, [
    [paren_right, marking],
    [semicolon, null],
  ]);
  return box_care;
}
