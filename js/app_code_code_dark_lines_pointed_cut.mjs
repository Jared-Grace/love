import { not } from "./not.mjs";
import { html_text_code_breakable_add } from "./html_text_code_breakable_add.mjs";
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
  "A minus written against a number, with nothing before it that it could take away from, is cut with the number, so -1 reaches cut whole and wears one colour, asked by the human 2026-10-04 for the -1 of a negative width. a - 1 is not, since the minus there stands apart, and neither is x-1, since the minus there follows a name. When cut gives the whole negative number no colour, the minus is drawn plain and the number is handed to cut on its own, exactly as it was cut before, so a lesson pointing at 1 still colours the 1 of -1.";
  function negative_cut(piece) {
    "the pieces to draw a whole number, name or negative number as";
    let drawn = cut(piece);
    let negative = /^-\d/.test(piece);
    if (not(negative)) {
      return drawn;
    }
    function lambda(pair) {
      let nn = null_not_is(pair[1]);
      return nn;
    }
    let colored = drawn.some(lambda);
    if (colored) {
      return drawn;
    }
    let digits = piece.slice(1);
    let rest = cut(digits);
    let all = [["-", null], ...rest];
    return all;
  }
  function paint(component, code) {
    app_code_code_dark_lines_comments(component, code);
    let nothing = text_empty();
    html_text_set(component, nothing);
    let runs = app_code_note_runs(code);
    for (let run of runs) {
      function write(parent, text) {
        let pieces = text_split(
          text,
          /((?<![\w)\]])-\d+\b|\b(?:\d+|[A-Za-z_]\w*)\b)/,
        );
        for (let piece of pieces) {
          if (text_empty_is(piece)) {
            continue;
          }
          let drawn = negative_cut(piece);
          for (let pair of drawn) {
            let span = html_span_text(parent, pair[0]);
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
      ("the run is written in the pieces a line of code may break between, so a line too wide for its room wraps between its tokens - a place to break never falls inside a whole number or a whole name, so each still reaches cut whole");
      html_text_code_breakable_add(component, run[0], write);
    }
  }
  return paint;
}
