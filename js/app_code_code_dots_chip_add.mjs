import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { text_split } from "./text_split.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_code_dots_chip_add(parent, code) {
  arguments_assert(arguments, 2);
  ("a piece of code in a sentence, in the dark code style, with any three dots in it drawn in the placeholder grey: if (a) { ... } names the if without writing its lines out again, and the dots are the gap, not code");
  ("Asked for by the human 2026-10-09: the dots in { ... } should look like every other set of dots in the course, which the home titles and the explain lines already draw grey.");
  let chip = html_span(parent);
  html_style_code_dark_nowrap(chip);
  let pieces = text_split(code, "...");
  function piece_add(piece, index) {
    if (index > 0) {
      app_code_placeholder_dots(chip);
    }
    html_span_text(chip, piece);
  }
  each_index(pieces, piece_add);
  return chip;
}
