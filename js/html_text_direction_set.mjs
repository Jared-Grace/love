import { html_style_set } from "./html_style_set.mjs";
import { html_text_align } from "./html_text_align.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
import { ternary } from "./ternary.mjs";
export function html_text_direction_set(element, text) {
  "point one piece of the page the way the words inside it are actually read, worked out from the words themselves rather than from anything the page was told beforehand";
  "the direction and the side the line starts from are one decision and are set together, because setting only the first leaves the words running the right way and the line beginning at the wrong end - which reads as though the language ran backwards even though every word is in its place";
  "saying it out loud both ways round is the point, not just for a right-to-left one. a piece that stays silent inherits whatever the frame around it was last told, so an English line under an Urdu one right-aligned itself and pushed its label to the far right.";
  let rtl = text_rtl_is(text);
  let direction = ternary(rtl, "rtl", "ltr");
  let alignment = ternary(rtl, "right", "left");
  html_style_set(element, "direction", direction);
  html_text_align(element, alignment);
}
