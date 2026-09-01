import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_field_row } from "./app_g_arcs_field_row.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_g_arcs_field_shaped(
  parent,
  name,
  value,
  shape,
  voice_color,
) {
  "$plain name";
  "$plain value";
  "$plain shape";
  "$plain voice_color";
  "One filled field of a written arc drawn as a row of plain words: what the field is called down the left, and what was written in it drawn in the shape of the kind of thing it is.";
  "THIS IS THE DRAWING FOR A LINE THAT IS NOT BEING COMPARED WITH ANYTHING, which is most lines on the page. A line that has moved since somebody last read it is drawn twice over as runs instead, and both drawings sit on the same row so that they are the same row.";
  "THE THREE THINGS CHOSEN ABOUT A PERSON USED TO BE ONE PARAGRAPH THREE TIMES OVER. Their work, their trouble in their own words, and somebody's description of their whole arc were set one under another in the same type at the same weight - so nothing on the page said that the middle one is the person speaking and the other two are not, and a reviewer had to read all three to find out which was which.";
  "SPOKEN FIELDS ARE MARKED AND COLOURED AND NEVER SLANTED. Italics were tried and are wrong here for two reasons: a slant says emphasis to some readers and voice to others, so it does not reliably say the one thing it was there for; and every spoken field is a whole line or more, where a slant is read as a slower typeface rather than as a mark. Quotation marks say voice to everybody, and the colour says whose voice.";
  "THE COLOUR IS THE ONE THE GAME ALREADY GIVES THAT PERSON, and that is the whole point of it being a colour at all. A reviewer moves between the arc bench and the game, and a woman's words are the same deep rose in both - so the page is not teaching a second visual language for the same people. It is handed in rather than worked out here, because this draws one row and does not know whose row it is.";
  arguments_assert(arguments, 5);
  let app_g_arcs_field_row_answer = app_g_arcs_field_row(
    parent,
    name,
    shape,
    voice_color,
    false,
  );
  let row = property_get(app_g_arcs_field_row_answer, "row");
  let written = property_get(app_g_arcs_field_row_answer, "written");
  let said = value;
  let spoken = equal(shape, "spoken");
  if (spoken) {
    said = text_combine_multiple(["“", value, "”"]);
  }
  html_text_set(written, said);
  return row;
}
