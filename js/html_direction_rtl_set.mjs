import { ternary } from "./ternary.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_direction_rtl_set(component, rtl) {
  "Point one piece of the page from the right or from the left, having already been told which.";
  "This is the direction and nothing else. Which edge a line of words lines up against is a second decision, and a row of buttons that was standing in the middle of the page wants to go on standing there after it has been turned round - so anything that wants both says both.";
  "Said out loud both ways round, never left unsaid for the left-to-right case. A piece that stays silent inherits whatever the frame around it was last told, so an English row inside an Urdu page turned round without anybody asking it to.";
  "It reaches further than words. Pieces laid out in a row are laid out from the same end, so a row told this turns round entire, and each piece in it keeps whatever it had on its outer edge on its outer edge.";
  let direction = ternary(rtl, "rtl", "ltr");
  html_style_set(component, "direction", direction);
}
