import { each_index } from "./each_index.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_text_code_breakable_add } from "./html_text_code_breakable_add.mjs";
import { app_code_lesson_title_code_breakable } from "./app_code_lesson_title_code_breakable.mjs";
import { app_code_lesson_title_code_tile } from "./app_code_lesson_title_code_tile.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
export function app_code_lesson_statement_title_code_dots_paint_get(code) {
  arguments_assert(arguments, 1);
  ("what paints one piece of a home title's code whose value is left out as three dots: the code in one tile, with the dots in the placeholder grey");
  ("The dots are a place to fill in, not three characters the line has, so they wear the grey the log title's gap wears. Asked for by the human. The line is handed in whole and split on the dots rather than rebuilt, so its two ends stay whatever the line builders wrote.");
  let dots = "...";
  let shown = app_code_lesson_title_code_breakable(code);
  let pieces = text_split(shown, dots);
  function fill(host) {
    "every piece between the dots is kept, so if (b) ... else ... keeps its else - the middle was once dropped, when a line had only ever held one set of dots";
    function piece_add(piece, index) {
      if (greater_than(index, 0)) {
        app_code_placeholder_dots(host);
      }
      html_text_code_breakable_add(host, piece, html_span_text);
    }
    each_index(pieces, piece_add);
  }
  function paint_code(parent) {
    "the same tile and the same places to break as a title piece with no dots, so a long piece wraps between its tokens rather than running off the right edge - it was held to one line before, and on a phone with the text size turned up let c = a; a = \"...\"; ran past the screen, at the human's request, 2026-09-28";
    let tile = app_code_lesson_title_code_tile(parent);
    fill(tile);
  }
  return paint_code;
}
