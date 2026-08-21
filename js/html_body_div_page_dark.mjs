import { html_document_body } from "./html_document_body.mjs";
import { app_shared_color_page_dark } from "./app_shared_color_page_dark.mjs";
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
  "★ THE GROUND IS PAINTED ON THE BODY AS WELL AS ON THE DIV, AND THE BODY IS THE HALF THAT ACTUALLY COVERS THE PAGE. A div reaches as far as its own box, so anything wider or taller than the window - a drawing, a wide table - leaves bare white beside it the moment the page scrolls. The body's colour is different in kind: a browser spreads it across the whole canvas however far that scrolls, which is exactly the promise the name of this function makes.";
  "Widening the div to fit its contents was tried first and is the wrong shape, because a child asking for the full width of a parent that is asking to fit its children is a circle, and what a browser does with a circle is its own business rather than something to depend on.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  let ground = app_shared_color_page_dark();
  html_style_background(root, ground);
  html_style_set(root, "color", "#ffffff");
  html_font_set(root, "system-ui, sans-serif");
  let style_value = html_viewport_height_full();
  html_style_set(root, "min-height", style_value);
  html_style_padding(root, "16px");
  html_style_set(root, "box-sizing", "border-box");
  let body = html_document_body();
  html_style_background(body, ground);
  return root;
}
