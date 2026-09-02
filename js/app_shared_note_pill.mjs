import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_or_null } from "./property_or_null.mjs";
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
  ("A NOTE PUT OFF SAYS SO WHERE THE PART IT IS AGAINST IS SAID, in front of the words rather than after them, because the one thing a reviewer needs to know before reading a note is whether it is theirs to answer today. Said at the end it would be read after the note had already been considered, which is the reading it exists to save.");
  ("THE FLAG IS READ OFF THE NOTE AND NOTHING HERE KNOWS WHOSE NOTE IT IS. Bands are drawn for more than one kind of note and only some of those stores have any idea of a second pass; a note with nothing to say about it is drawn exactly as it always was, so a store that has never heard of putting a note off is unaffected.");
  let put_off = property_or_null(one, "deferred");
  let said = field;
  if (put_off) {
    said = text_combine_multiple([field, " · pass two"]);
  }
  let joined = text_combine_multiple([said, " — ", words]);
  let line = html_div_text(parent, joined);
  html_style_assign(line, {
    "margin-top": "0.3rem",
    "font-size": app_shared_font_size_label(),
    "line-height": "1.4",
    "background-color": "rgba(0,0,0,0.06)",
    padding: "0.3rem 0.4rem",
    "border-radius": "0.25rem",
  });
  ("IT IS FADED AS WELL AS LABELLED, because a column of bands is scanned rather than read and a word inside one is only found by whoever has already stopped there. Fading is what lets the eye pass over the ones that are not for today without reading any of them, and the label is then what explains a band the eye did stop at.");
  if (put_off) {
    html_style_assign(line, {
      opacity: "0.55",
    });
  }
  return line;
}
