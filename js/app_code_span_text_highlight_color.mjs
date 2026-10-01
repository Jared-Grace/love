import { html_bold } from "./html_bold.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_code_span_text_highlight_color(parent, text, background) {
  arguments_assert(arguments, 3);
  ("an ordinary English word in the colour a piece of code is marked with, in a colour handed in, so that the word and the code can be seen to be about each other");
  ("THE COLOUR IS HANDED IN because a screen pointing at two different pieces of code at once needs two of these words and they must not match. Where only one thing is pointed at, ",
    fn_name("app_code_span_text_highlight"),
    " asks for the app's one pointing colour and no caller has to choose.");
  ("COLOURED LETTERS, NOT A TILE, the human's rule, 2026-10-01: a filled background is kept for code (a number, a name, a line written out, which wears ",
    fn_name("app_code_span_text_tile_color"),
    "), so a tile always means code and coloured letters mean English. Bold, because thin coloured letters read faintly. Not picked: the tile this used to draw - same background, rounding and padding as a code chip in the reading font - which read as code");
  let span = html_span(parent);
  html_text_set(span, text);
  html_font_color_set(span, background);
  html_bold(span);
  return span;
}
