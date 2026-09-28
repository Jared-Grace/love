import { app_code_lesson_title_code_breakable } from "./app_code_lesson_title_code_breakable.mjs";
import { app_code_lesson_title_code_tile } from "./app_code_lesson_title_code_tile.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
export function app_code_lesson_statement_title_code_dots_paint_get(code) {
  arguments_assert(arguments, 1);
  ("what paints one piece of a home title's code whose value is left out as three dots: the code in one tile, with the dots in the placeholder grey");
  ("The dots are a place to fill in, not three characters the line has, so they wear the grey the log title's gap wears. Asked for by the human. The line is handed in whole and split on the dots rather than rebuilt, so its two ends stay whatever the line builders wrote.");
  let dots = "...";
  let shown = app_code_lesson_title_code_breakable(code);
  let pieces = text_split(shown, dots);
  let before = list_first(pieces);
  let after = list_last(pieces);
  function fill(host) {
    html_span_text(host, before);
    app_code_placeholder_dots(host);
    html_span_text(host, after);
  }
  function paint_code(parent) {
    "the same tile and the same places to break as a title piece with no dots, so a long piece wraps between its tokens rather than running off the right edge - it was held to one line before, and on a phone with the text size turned up let c = a; a = \"...\"; ran past the screen, at the human's request, 2026-09-28";
    let tile = app_code_lesson_title_code_tile(parent);
    fill(tile);
  }
  return paint_code;
}
