import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_arcs_field_shaped(parent, name, value, shape) {
  "$plain name";
  "$plain value";
  "$plain shape";
  "One filled field of a written arc drawn as a row: what the field is called down the left, and what was written in it drawn in the shape of the kind of thing it is.";
  "THE THREE THINGS CHOSEN ABOUT A PERSON USED TO BE ONE PARAGRAPH THREE TIMES OVER. Their work, their trouble in their own words, and somebody's description of their whole arc were set one under another in the same type at the same weight - so nothing on the page said that the middle one is the person speaking and the other two are not, and a reviewer had to read all three to find out which was which.";
  "THE NAME IS SHOWN ON EVERY ROW BECAUSE THE PRESSES UNDERNEATH ARE NAMED AFTER IT. Filing a note means picking the part that is wrong out of a row of buttons, and a row of buttons reading occupation, trouble, summary is only usable if the lines above them are labelled with the same words.";
  "THE NAME IS HELD TO A FIXED WIDTH so that the written values line up in a column of their own. Down a long arc that column edge is what lets somebody skim what was written without reading what it is called, and the labels fall away into the margin.";
  "SPOKEN FIELDS GET QUOTATION MARKS AS WELL AS ITALICS, because italics alone say emphasis to some readers and voice to others. Marks say voice to everybody, and the two together cannot be misread as the page shouting.";
  "IT WRAPS RATHER THAN SHRINKS. On a phone the label column and a readable line of words do not both fit, so the value drops beneath its label instead of being squeezed into a ribbon two words wide.";
  arguments_assert(arguments, 4);
  let label_size = app_shared_font_size_label();
  let styles = {
    fact: {
      flex: "0 1 auto",
      "font-weight": "bold",
      "background-color": "rgba(0,0,0,0.07)",
      padding: "0.1rem 0.4rem",
      "border-radius": "0.25rem",
      "line-height": "1.4",
    },
    spoken: {
      flex: "1 1 11rem",
      "font-style": "italic",
      "line-height": "1.45",
    },
    prose: {
      flex: "1 1 11rem",
      "line-height": "1.5",
      "background-color": "rgba(0,0,0,0.04)",
      padding: "0.35rem 0.5rem",
      "border-radius": "0.3rem",
    },
    verdict: {
      flex: "0 1 auto",
      "font-weight": "bold",
      "letter-spacing": "0.08em",
      "background-color": "rgba(0,0,0,0.78)",
      color: "rgba(255,255,255,0.95)",
      padding: "0.1rem 0.5rem",
      "border-radius": "0.25rem",
    },
    aside: {
      flex: "1 1 11rem",
      "font-size": label_size,
      opacity: "0.45",
      "line-height": "1.35",
    },
    scripture: {
      flex: "1 1 11rem",
      "line-height": "1.45",
      "border-left": "3px solid rgba(0,0,0,0.3)",
      "padding-left": "0.5rem",
    },
  };
  let style = property_get(styles, shape);
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "baseline",
    gap: "0.5rem",
    "margin-top": "0.3rem",
  });
  let label = html_div_text(row, name);
  html_style_assign(label, {
    flex: "0 0 4.5rem",
    "font-size": label_size,
    opacity: "0.45",
  });
  let said = value;
  let spoken = equal(shape, "spoken");
  if (spoken) {
    said = text_combine_multiple(["“", value, "”"]);
  }
  let written = html_div_text(row, said);
  html_style_assign(written, style);
  return row;
}
