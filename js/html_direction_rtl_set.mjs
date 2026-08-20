import { ternary } from "./ternary.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_text_align } from "./html_text_align.mjs";
export function html_direction_rtl_set(component, rtl) {
  "Point one piece of the page from the right or from the left, having already been told which.";
  "The direction and the edge a line starts from are one decision and are set together, because setting only the first leaves the words running the right way and the line beginning at the wrong end - which reads as though the language ran backwards even though every word is in its place.";
  "Said out loud both ways round, never left unsaid for the left-to-right case. A piece that stays silent inherits whatever the frame around it was last told, so an English line under an Urdu one right-aligned itself and pushed its label to the far right.";
  "It reaches further than the words. Pieces laid out in a row are laid out from the same end, so a row of buttons told this turns round entire, and each button keeps whatever it had on its outer edge on its outer edge.";
  let direction = ternary(rtl, "rtl", "ltr");
  let alignment = ternary(rtl, "right", "left");
  html_style_set(component, "direction", direction);
  html_text_align(component, alignment);
}
