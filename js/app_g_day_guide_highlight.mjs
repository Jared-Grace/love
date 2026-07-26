import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_day_guide_highlight(div_map, coords) {
  "the GOLD guide-tile overlay — a warm gold square marking where to tap next on the walk to the discerned person. pointer-events NONE so the tap falls THROUGH to the map beneath, moving the player there; the after-move hook then recomputes the next gold tile";
  let i = html_element(div_map, "i");
  html_click_none(i);
  let v = g_img_square_size_css();
  let border = text_combine_multiple(["calc(", v, "*.09)"]);
  let v2 = g_img_square_size_css();
  let glow = text_combine_multiple(["calc(", v2, "*.14)"]);
  html_style_assign(i, {
    "box-sizing": "border-box",
    border: text_combine_multiple([border, " solid #ffd633"]),
    "border-radius": "14%",
    background: "rgba(255, 214, 51, 0.25)",
    "box-shadow": text_combine_multiple(["0 0 ", glow, " #ffd633"]),
  });
  g_img_square_style_position(i, coords, "icon");
  return i;
}
