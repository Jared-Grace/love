import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_code_note_runs } from "./app_code_note_runs.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function app_code_code_dark_lines_comments(component, code) {
  "code standing on more than one line, written into a code chip with every note in it drawn dimmer than the code around it, and every name a note marks drawn in the same colour there as in the code";
  "A note is the one part of the screen the machine does not read, and the only thing a picture can do to say so is draw it as less than what surrounds it.";
  "A NAME IS SAID THREE WAYS AT ONCE, and each way is the one that still works when the way above it is gone. The brackets survive plain text, a reader with no colour vision at all, and a screen read aloud. The brightness differs between names as well as the hue, so a reader who cannot tell two hues apart can still pair the name in the note with the name in the code. The hue is the fastest of the three for the reader who has it, and it is not decoration for being the fastest - three greys have to be compared, three colours are known at a glance.";
  "The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with, and that slot is called with three arguments by the worked example and with two by the quiz - the same reason its plain twin has never asserted either.";
  "The chip is emptied before anything is put in it, because what goes in is a run of spans rather than a single piece of text, and a chip drawn twice would otherwise keep the first drawing underneath the second.";
  "Only the note is dimmed, not the line it stands on. A note may start after code on the same line - console.log(1); // a note - and there the code before the slashes still runs, so drawing the whole line dim would say it did not.";
  "Nothing here decides what anything looks like. What colour each character is drawn in, and where one piece of the program stops looking like the next, is asked next door and answered as a plain list; all that is left here is putting that list into the page. So the rule about the notes and the names can be read, and argued with, without a browser anywhere near it.";
  "The lines are pulled to the left edge, for the reason the plain multi-line writer beside this one gives: a button centres what is written on it, and two lines of code centred are two lines starting in different places, which is part of how code is read.";
  html_style_code_dark(component);
  html_style_white_space(component, "pre-wrap");
  html_text_align_left(component);
  let nothing = text_empty();
  html_text_set(component, nothing);
  let runs = app_code_note_runs(code);
  for (let run of runs) {
    let span = html_span_text(component, run[0]);
    html_font_color_set(span, run[1]);
    html_style_opacity(span, run[2]);
  }
}
