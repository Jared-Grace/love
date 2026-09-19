import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_note_name_color_or_null } from "./app_code_note_name_color_or_null.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_note_cycle_code(parent, parts, names) {
  arguments_assert(arguments, 3);
  ("writes plain writing and pieces of code in turn into something already on the page, colouring a code piece that is one of the lesson's names");
  ("WRITES INTO WHAT IT IS GIVEN RATHER THAN MAKING A LINE OF ITS OWN, which is the whole reason it is separate from the twin that does. Some of these sentences begin before the alternating part does - a reminder opens with the words Remember, from and a button naming the lesson, and only then turns into writing and code in turn. A writer that made its own line could not be used there, so the colour stopped at the door and those sentences were the last plain ones on the screen.");
  ("The plain slot comes first and the code slot second, and they take turns from there. Anything meant to stay plain goes in a plain slot, so a sentence is one list and nothing in it has to be marked up.");
  ("A code piece that is not one of the names keeps the ordinary code colour. Most are not - a word, a quoted thing, a whole small program - and colouring one of those would say it was a name being followed.");
  let plain = true;
  for (let part of parts) {
    let span = html_span_text(parent, part);
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
}
