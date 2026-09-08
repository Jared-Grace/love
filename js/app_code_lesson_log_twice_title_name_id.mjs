import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
export function app_code_lesson_log_twice_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: writing out twice, followed by the one line that does it and how many times this lesson writes it");
  ("The line is shown once and counted, rather than shown twice. What makes this lesson different from every title above it is still visible before the title is read - there are two of them - but it is said by the count instead of by a second copy.");
  ("Shown twice, it ran off the right edge of a narrow screen. A title's line is spelled with no wrapping allowed, on purpose: a title sits beside a number on a list of a hundred and twenty and a break in it would cost a whole row. So a line that will not fit has nowhere to go but sideways, and it takes the rest of the title with it - the reader of a phone is shown a lesson whose name ends off the screen.");
  ("Nothing inside the parentheses. The numbers that stood there were never the lesson - every question picks its own - and a title is recognised rather than worked out, so what is left is the shape alone.");
  ("THE GAP INSIDE THEM IS GREY, in the one grey this course paints a gap in. This is the only title on the home list showing a shape with a part left out, and until now it showed that part in the same white as the code around it - so the dots read as three characters the line actually has. The card inside the lesson about a ! around a joined pair draws its gaps in the grey, and a learner who met the two in the same session met the same idea painted two ways.");
  ("Painted rather than spelled, because a line handed over as a string is one colour all the way across. The two ends of it are still built from the marks rather than typed, so the title cannot come to say something the app would not print.");
  ("The words below are what the id is built from, so they are the one thing here that is not free to change. These were reworded once, on 2026-08-23, from two things to twice - safe only because the lesson had never been reachable in prod and had stood in latest for three days. Anything less certain than that is a decision about learners' records rather than about wording.");
  let words = "Writing out twice";
  ("No space before the count. Measured on a phone, the line and its count with a space between them reached nine pixels past the right edge of its own row, and without one they finish three pixels inside it - the space was the whole of the difference.");
  let left = js_console_log_name();
  let right = js_code_parenthesis_left();
  let opening = text_combine(left, right);
  let code = js_code_parenthesis_right();
  let closing = js_code_statement(code);
  let counted = text_combine(closing, "(x2)");
  function fill(host) {
    "the line with its gap: console.log( then the grey dots then );(x2)";
    html_span_text(host, opening);
    app_code_placeholder_dots(host);
    html_span_text(host, counted);
  }
  function paint_code(parent) {
    "the line drawn as one code tile, so it reads as a single line and never breaks across two rows";
    app_code_code_tile(parent, fill);
  }
  let built = app_code_lesson_statement_title_name_id_paint(words, paint_code);
  return built;
}
