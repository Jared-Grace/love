import { arguments_assert } from "./arguments_assert.mjs";
import { html_direction_rtl_set } from "./html_direction_rtl_set.mjs";
import { ternary } from "./ternary.mjs";
import { html_text_align } from "./html_text_align.mjs";
export function html_direction_rtl_align_set(component, rtl) {
  "Turn one piece of the page round and move the start of its lines to the same end, having already been told which way it runs.";
  "The two are one decision far more often than they are two. Setting only the direction leaves every word in its right place and the line still beginning at the wrong end, which reads as though the language ran backwards - so the pair is written down once here rather than remembered at each place that wants it.";
  "Its neighbour that sets the direction alone is still the one to call where the edge is a separate choice, which is what a row of buttons standing in the middle of a page wants.";
  "Both cases are said out loud. A piece that stays silent inherits whatever the frame around it was last told, so an English line inside an Urdu panel aligns itself to the far right without anybody asking it to.";
  arguments_assert(arguments, 2);
  html_direction_rtl_set(component, rtl);
  let alignment = ternary(rtl, "right", "left");
  html_text_align(component, alignment);
}
