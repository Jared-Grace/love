import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_code_note_runs } from "./app_code_note_runs.mjs";
import { text_split } from "./text_split.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_code_dark_lines_pointed_cut(cut) {
  "a painter for a program on more than one line, drawing it as the note-dimming writer does and then handing each whole number and whole name to cut, which answers with the pieces to draw it as, each a pair of its text and the colour to put behind it, or null for none";
  "cut is what differs between painters: one colours a whole number a pointer names, another also colours part of a number, such as the 3 at the end of 123. The walk over the runs and the drawing of each piece are written once here, so the two cannot drift apart.";
  "It is drawn over the note-dimming writer's own runs rather than beside them, so the names keep the colours that writer gives them and a note stays dim.";
  function paint(component, code) {
    app_code_code_dark_lines_comments(component, code);
    let nothing = text_empty();
    html_text_set(component, nothing);
    let runs = app_code_note_runs(code);
    for (let run of runs) {
      let pieces = text_split(run[0], /\b(\d+|[A-Za-z_]\w*)\b/);
      for (let piece of pieces) {
        if (text_empty_is(piece)) {
          continue;
        }
        let drawn = cut(piece);
        for (let pair of drawn) {
          let span = html_span_text(component, pair[0]);
          html_font_color_set(span, run[1]);
          html_style_opacity(span, run[2]);
          let color = pair[1];
          if (null_not_is(color)) {
            html_style_background_color_set(span, color);
            html_font_color_set(span, "white");
          }
        }
      }
    }
  }
  return paint;
}
