import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_arrow_svg } from "./example_arrow_svg.mjs";
import { app_shared_color_green } from "./app_shared_color_green.mjs";
// The green down-arrow between the stacked before/after blocks (SVG tinted via
// currentColor).
export function example_arrow_dom(parent) {
  let arrow = html_div(parent);
  html_text_set(arrow, example_arrow_svg());
  html_font_color_set(arrow, app_shared_color_green());
  html_style_set(arrow, "text-align", "center");
  html_style_set(arrow, "line-height", "0");
  html_style_set(arrow, "margin", "0");
  return arrow;
}
