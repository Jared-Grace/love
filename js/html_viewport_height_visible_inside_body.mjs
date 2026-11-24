import { html_viewport_height_visible } from "./html_viewport_height_visible.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_viewport_height_visible_inside_body() {
  "The height of the part of the screen a reader can see, less the margin the browser puts above and below the body - the most a box inside the body can be without the page growing a scrollbar.";
  "★ A BOX AS TALL AS THE SCREEN MAKES A SHORT PAGE SCROLL. Every browser gives the body a margin of 8px at the top and 8px at the bottom unless told otherwise, and this repo never tells it otherwise, so a box of exactly the visible height leaves the page 16px taller than the window. Measured on the message app with nothing in it: 860 against a window of 844.";
  let visible = html_viewport_height_visible();
  let v = text_combine_multiple(["calc(", visible, " - 16px)"]);
  return v;
}
