import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arcs_field_shapes } from "./app_g_arcs_field_shapes.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
export function app_g_arcs_field_row(
  parent,
  name,
  shape,
  voice_color,
  previous,
) {
  "$plain name";
  "$plain shape";
  "$plain voice_color";
  "$plain previous";
  "The empty row one field of an arc is drawn on: what the field is called down the left, and beside it a box already dressed in the shape of the kind of thing the field is, waiting for whoever asked to put words in it.";
  "IT HANDS BACK AN EMPTY BOX RATHER THAN A FILLED ONE, and that is what lets the same row carry two quite different kinds of writing. Plain words go in as text; a line being compared with an older one goes in as a string of runs, each dressed to say whether it moved. Both need the identical label, gap and shape around them, and the moment that dressing is written out twice the two halves of a comparison start drifting apart.";
  "THE NAME IS SHOWN ON EVERY ROW BECAUSE THE PRESSES UNDERNEATH ARE NAMED AFTER IT. Filing a note means picking the part that is wrong out of a row of buttons, and a row of buttons reading occupation, trouble, summary is only usable if the lines above them carry the same words.";
  "THE NAME IS HELD TO A FIXED WIDTH so that the written values line up in a column of their own. Down a long arc that column edge is what lets somebody skim what was written without reading what it is called, and the labels fall away into the margin.";
  "THE LABEL SAYS WHICH OF A PAIR THIS IS, because nothing else on the row can. Where a previous wording and a current one are set one above the other in the very same shape - which is what makes them comparable at all - the only thing left to tell them apart is what they are called, so the older one's name is the loud one.";
  "IT WRAPS RATHER THAN SHRINKS. On a phone the label column and a readable line of words do not both fit, so the value drops beneath its label instead of being squeezed into a ribbon two words wide.";
  arguments_assert(arguments, 5);
  let label_size = app_shared_font_size_label();
  let shapes = app_g_arcs_field_shapes(voice_color);
  let style = property_get(shapes, shape);
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "baseline",
    gap: "0.5rem",
    "margin-top": "0.3rem",
  });
  let label = html_div_text(row, name);
  let label_style = {
    flex: "0 0 4.5rem",
    "font-size": label_size,
    opacity: "0.45",
  };
  if (previous) {
    label_style = {
      flex: "0 0 4.5rem",
      "font-size": label_size,
      "font-weight": "bold",
      color: app_g_arcs_moved_color(),
      opacity: "1",
    };
  }
  html_style_assign(label, label_style);
  let written = html_div(row);
  html_style_assign(written, style);
  let r = {
    row,
    written,
  };
  return r;
}
