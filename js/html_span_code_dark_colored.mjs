import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { list_get } from "./list_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function html_span_code_dark_colored(parent, texts, colors) {
  "one dark code chip written out of several pieces, each piece wearing a colour of its own, handed back so the caller can say something about the chip as a whole";
  "ONE CHIP WITH COLOUR LAID OVER PARTS OF IT, not one chip per part. Separate chips each carry their own rounding and their own room at the edges, so a line built that way reads as several pieces of code with gaps between them. A line of code is one thing, and the colours are marks put on it rather than joins in it.";
  "So the chip carries the black, the code font and the white, and each piece adds a background and nothing else. That is what keeps the black solid all the way across while still letting some of the pieces be a different colour.";
  "EVERY PIECE TAKES A COLOUR, and a piece meant to stay as it was takes the code background itself. There is no way here to say leave this one alone, on purpose: a list of pieces beside a list of colours can be read straight down and checked, where a list with holes in it makes a reader work out which hole belongs to which piece. The neutral is a real colour that happens to be the one already there.";
  "The two lists are walked by position, so they must be the same length; a colour list that runs short is a mistake in the caller and shows up as a piece asking for a colour that is not there.";
  arguments_assert(arguments, 3);
  let chip = html_span(parent);
  html_style_code_dark(chip);
  for (let at of list_indexes(texts)) {
    let text = list_get(texts, at);
    let color = list_get(colors, at);
    let piece = html_span_text(chip, text);
    html_style_background_color_set(piece, color);
  }
  return chip;
}
