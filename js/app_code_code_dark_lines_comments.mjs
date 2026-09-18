import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_code_dark_note_write } from "./app_code_code_dark_note_write.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function app_code_code_dark_lines_comments(component, code) {
  "code standing on more than one line, written into a code chip with every note in it drawn dimmer than the code around it";
  "A note is the one part of the screen the machine does not read, and the only thing a picture can do to say so is draw it as less than what surrounds it. Dimmer rather than a colour of its own, because a colour would be a second thing to learn on the screen that exists to teach the first.";
  "The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with, and that slot is called with three arguments by the worked example and with two by the quiz - the same reason its plain twin has never asserted either.";
  "The chip is emptied before anything is put in it, because what goes in is a run of spans rather than a single piece of text, and a chip drawn twice would otherwise keep the first drawing underneath the second.";
  "Only the note is dimmed, not the line it stands on. A note may start after code on the same line - console.log(1); // a note - and there the code before the slashes still runs, so drawing the whole line dim would say it did not.";
  "The parser is asked where the notes are rather than the text searched for two slashes, because two slashes inside a string read exactly like the start of a note and only the parser can tell the two apart. Every program this paints is one the lesson also runs, so it always parses.";
  "The code is written out as it came, newlines and spaces and all, and cut only where a note starts and ends. So a program holding no note is drawn as one run of text, exactly as the plain writer draws it.";
  "How one note is drawn lives next door rather than here, because this asks the parser where the notes are and that is a whole job on its own; what a note looks like once found is a second one, and it has grown a rule of its own about the brackets around a name.";
  "The lines are pulled to the left edge, for the reason the plain multi-line writer beside this one gives: a button centres what is written on it, and two lines of code centred are two lines starting in different places, which is part of how code is read.";
  html_style_code_dark(component);
  html_style_white_space(component, "pre-wrap");
  html_text_align_left(component);
  let nothing = text_empty();
  html_text_set(component, nothing);
  let comments = js_comments_get(code);
  let from = 0;
  for (let comment of comments) {
    let start = property_get(comment, "start");
    let end = property_get(comment, "end");
    let before = text_slice(code, from, start);
    html_span_text(component, before);
    let note = text_slice(code, start, end);
    app_code_code_dark_note_write(component, note);
    from = end;
  }
  let rest = text_slice_from(code, from);
  html_span_text(component, rest);
}
