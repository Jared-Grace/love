import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { list_is } from "./list_is.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { each } from "./each.mjs";
export function app_code_div_braces_painted(parent, pieces) {
  arguments_assert(arguments, 2);
  ("one line of writing in which a brace may be drawn in the colour it wears in the code above it, so the line can say which brace it means by showing it. Each piece is either a list of parts, plain writing and code taking turns as on every other line of a lesson screen, or a brace with its colour, as { brace, color }");
  let div = html_div(parent);
  function piece_add(piece) {
    let l = list_is(piece);
    if (l) {
      html_cycle_code(div, piece);
      return;
    }
    let brace = property_get(piece, "brace");
    let color = property_get(piece, "color");
    html_span_text_code_background(div, brace, color);
  }
  each(pieces, piece_add);
  return div;
}
