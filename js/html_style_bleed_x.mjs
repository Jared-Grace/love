import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
export function html_style_bleed_x(component, padding) {
  arguments_assert(arguments, 2);
  ("a child reaches out over its parent's room to the left and right, padding being how much room the parent has on each side, and its text is put back where it was; so a colour behind the child runs all the way across its parent, edge to edge, while what it says does not move");
  let margin = text_combine_multiple(["calc(-1 * ", padding, ")"]);
  html_style_margin_x(component, margin);
  html_style_padding_x(component, padding);
}
