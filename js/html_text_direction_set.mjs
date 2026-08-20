import { text_rtl_is } from "./text_rtl_is.mjs";
import { ternary } from "./ternary.mjs";
import { html_direction_rtl_set } from "./html_direction_rtl_set.mjs";
import { html_text_align } from "./html_text_align.mjs";
export function html_text_direction_set(element, text) {
  "point one piece of the page the way the words inside it are actually read, worked out from the words themselves rather than from anything the page was told beforehand";
  "for a verse and its glosses, where the words arrive already written and the language they are in is exactly what is wanted. its neighbour is for the other case, a piece being told which way to run before anything has been written in it at all.";
  "the direction and the edge the line starts from are one decision here and are made together, because setting only the first leaves the words running the right way and the line beginning at the wrong end - which reads as though the language ran backwards even though every word is in its place";
  "saying the alignment out loud both ways round is the point, not just for a right-to-left one. a piece that stays silent inherits whatever the frame around it was last told, so an English line under an Urdu one right-aligned itself and pushed its label to the far right.";
  let rtl = text_rtl_is(text);
  html_direction_rtl_set(element, rtl);
  let alignment = ternary(rtl, "right", "left");
  html_text_align(element, alignment);
}
