import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_note_name_color_or_null } from "./app_code_note_name_color_or_null.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_note_div_cycle_code(parent, parts, names) {
  arguments_assert(arguments, 3);
  ("a line of the lesson's own writing with pieces of code set into it, where a piece that is one of the lesson's names is written in that name's colour");
  ("THE SAME NAME IS THE SAME COLOUR EVERYWHERE ON THE SCREEN, and the writing above the code box is part of the screen. Until this existed the colour started at the code box: a reader met a plain name in the sentence explaining the idea, then met a red one in the program, and had to work out for themselves that those were the same thing - which is the exact work the colour was added to save them.");
  ("The parts come in turn, the first plain writing and the next a piece of code, and so on, which is the arrangement the plain twin of this uses and the reason a sentence can be written as one list. Anything a screen wants left plain is put in a plain slot, so nothing had to be marked up.");
  ("A code piece that is not one of the names keeps the ordinary code colour. Most of them are not - a word, a quoted thing, a whole small program - and colouring one of those would say it was a name being followed.");
  ("The name is written in its colour, not on a patch of it, for the reason the code box gives: every chip here is black, and on black a bright colour is already at its most legible as ink. The patch belongs to the cup card, which is pale.");
  ("The brackets the code box puts round a name are not put round it here, because a chip is already the mark: the name is standing on a black ground in a different letterform from every word beside it, which is the same thing the brackets are for and is not lost by a reader who sees no colour.");
  let div = html_div(parent);
  let plain = true;
  for (let part of parts) {
    let span = html_span_text(div, part);
    if (plain) {
      plain = false;
      continue;
    }
    html_style_code_dark_nowrap(span);
    let color = app_code_note_name_color_or_null(names, part);
    if (color) {
      html_font_color_set(span, color);
    }
    plain = true;
  }
  return div;
}
