import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
export function app_shared_note_pill(parent, one) {
  "One note drawn as a quiet band, the part it was filed against standing in front of the words.";
  "IT HANDS THE BAND BACK RATHER THAN ONLY DRAWING IT. A bench that lets a note be answered has to hang the press on the band itself, and a band it could not reach would make it draw its own - two bands that looked alike on the day and drifted apart on the next change of colour.";
  "A TURN AND A PERSON AND A PICTURE GET THE SAME BAND ON PURPOSE. A note against an occupation, a note against a line and a note against a drawing are the same kind of thing to read past, and three looks would say they were three kinds.";
  arguments_assert(arguments, 2);
  let field = property_get(one, "field");
  let words = property_get(one, "note");
  let joined = text_combine_multiple([field, " — ", words]);
  let line = html_div_text(parent, joined);
  html_style_assign(line, {
    "margin-top": "0.3rem",
    "font-size": app_shared_font_size_label(),
    "line-height": "1.4",
    "background-color": "rgba(0,0,0,0.06)",
    padding: "0.3rem 0.4rem",
    "border-radius": "0.25rem",
  });
  return line;
}
