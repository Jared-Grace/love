import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { js_comment_start } from "./js_comment_start.mjs";
import { text_empty } from "./text_empty.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_trim } from "./text_trim.mjs";
export function app_code_code_dark_lines_comments(component, code) {
  ("code standing on more than one line, written into a code chip with every note in it drawn dimmer than the lines around it");
  ("A note is the one line on the screen the machine does not read, and the only thing a picture can do to say so is draw it as less than what surrounds it. Dimmer rather than a colour of its own, because a colour would be a second thing to learn on the screen that exists to teach the first.");
  ("The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with, and that slot is called with three arguments by the worked example and with two by the quiz - the same reason its plain twin has never asserted either.");
  ("The chip is emptied before anything is put in it, because what goes in is a run of spans rather than a single piece of text, and a chip drawn twice would otherwise keep the first drawing underneath the second.");
  ("The line is trimmed only to decide what it is, never to decide what is shown. A note indented under the line above it is still a note, and the space in front of it is part of how the program looks.");
  html_style_code_dark(component);
  html_style_white_space(component, "pre-wrap");
  let nothing = text_empty();
  html_text_set(component, nothing);
  let lines = text_split_newline(code);
  let slashes = js_comment_start();
  let dim = app_shared_color_gray();
  let newline = "\n";
  let separated = false;
  for (let line of lines) {
    if (separated) {
      html_span_text(component, newline);
    }
    separated = true;
    let span = html_span_text(component, line);
    let trimmed = text_trim(line);
    let note = text_starts_with(trimmed, slashes);
    if (note) {
      html_font_color_set(span, dim);
    }
  }
}
