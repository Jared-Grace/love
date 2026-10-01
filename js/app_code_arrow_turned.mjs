import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_arrow_svg } from "./app_shared_arrow_svg.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
export function app_code_arrow_turned(parent, degrees) {
  ("a prominent arrow - a big triangular head on a short line - turned degrees clockwise from rightwards, as ",
    fn_name("app_shared_arrow_svg"),
    " turns it. Drawn rather than typed, so it centres exactly (a text arrow's ink sits low in its line box) and occupies only its own width (no glyph side bearings to cancel out). One place to change the arrow look the code app draws");
  let arrow = html_div(parent);
  let text = app_shared_arrow_svg(degrees);
  html_text_set(arrow, text);
  ("the svg fills with currentColor, so this colours it - a theme blue instead of hard black, softer than the code chips while still clear on the light-blue container");
  let color = app_shared_color_blue_dark();
  html_font_color_set(arrow, color);
  ("flex + line-height 0 makes the wrapper exactly as tall as the drawing, so the row centres it against the chips and gains no extra height");
  html_display_flex(arrow);
  html_align_items_center(arrow);
  html_style_line_height(arrow, "0");
  return arrow;
}
