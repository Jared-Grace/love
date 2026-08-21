import { html_viewport_height_full } from "./html_viewport_height_full.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_background } from "./html_style_background.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
export function html_body_div_page_dark() {
  "Create the div a whole dark page is drawn inside and return it - dark ground, light text, the plain system font, tall enough to fill the screen even when there is little on it, and clear of the edges.";
  "The two preview pages on the sandbox app opened with these same six lines each. Standing apart they drift: one gets a lighter ground or a wider margin than the other, and nothing says so, because two pages looking slightly different is not a fault anything can name.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_style_background(root, app_shared_color_page_dark());
  html_style_set(root, "color", "#ffffff");
  html_font_set(root, "system-ui, sans-serif");
  html_style_set(root, "min-height", html_viewport_height_full());
  html_style_padding(root, "16px");
  return root;
}
