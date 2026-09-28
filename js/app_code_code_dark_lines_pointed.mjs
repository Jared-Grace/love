import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_code_dark_lines_comments } from "./app_code_code_dark_lines_comments.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_code_note_runs } from "./app_code_note_runs.mjs";
import { text_split } from "./text_split.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_code_dark_lines_pointed(pointers) {
  arguments_assert(arguments, 1);
  ("a painter for a program on more than one line, drawing it as the note-dimming writer does and then giving each whole number a pointer names that pointer's colour behind it - so the 7 in let chair = 7; wears the green the 7 wears in the writing and the picture above it");
  ("Only whole numbers and whole names standing on their own are coloured: a digit inside a name, such as the 2 in a2, is part of the name and is left as it is, and a name is coloured only when a pointer lists it, so row is coloured and rows_before is not. Names were added at the human's word, 2026-09-28, so the names row and column wear the colours those words wear in the writing.");
  ("It is drawn over the note-dimming writer's own runs rather than beside them, so the names keep the colours that writer gives them and a note stays dim.");
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
        let span = html_span_text(component, piece);
        html_font_color_set(span, run[1]);
        html_style_opacity(span, run[2]);
        let color = app_code_pointer_color_or_null(pointers, piece);
        if (null_not_is(color)) {
          html_style_background_color_set(span, color);
          html_font_color_set(span, "white");
        }
      }
    }
  }
  return paint;
}
