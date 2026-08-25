import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_get } from "./list_get.mjs";
export function app_g_arcs_depth_block(parent, depth) {
  "$plain depth";
  "A box for one level of a written arc, drawn inside the level that holds it and carrying a rail down its left edge, so how deep a thing sits is read off the page rather than worked out from what it says.";
  "IT NESTS IN THE PAGE AND NOT ONLY IN THE MIND. The turns of a conversation used to be laid beside their heading rather than inside it - every card a brother of the words standing over it - so where one conversation stopped and the next began was told by a bold line and nothing else, and a reviewer scrolling fast went straight past it. Held inside, a conversation ends where its rail ends.";
  "THE RAIL FADES AS IT GOES IN, which is what makes three of them readable at once. A person's rail is the darkest thing on the page and a turn's is nearly not there, so a glance at the left margin says which level the eye is on without reading a word of it.";
  "THE INDENT IS SMALL ON PURPOSE. This is read on a phone, where three levels at a comfortable indent would spend a third of the width on emptiness and wrap every line the reviewer came to read.";
  arguments_assert(arguments, 2);
  let styles = [
    {
      "border-left": "3px solid rgba(0,0,0,0.45)",
      "padding-left": "0.6rem",
      "margin-top": "1.6rem",
    },
    {
      "border-left": "2px solid rgba(0,0,0,0.26)",
      "padding-left": "0.6rem",
      "margin-top": "0.9rem",
    },
    {
      "border-left": "1px solid rgba(0,0,0,0.14)",
      "padding-left": "0.6rem",
      "margin-top": "0.6rem",
    },
  ];
  let style = list_get(styles, depth);
  let block = html_div(parent);
  html_style_assign(block, style);
  return block;
}
