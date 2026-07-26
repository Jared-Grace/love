import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_class_add } from "./html_class_add.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_day_target_highlight(div_map, npc) {
  "a GOLD reticle encircling the NPC the Spirit has revealed to talk to next in the #day_unbelievers demo — gold + glow = God's leading (the gold-is-God design), so the discerned person stands out warm and bright and the player knows where to head";
  let i = html_element(div_map, "i");
  html_click_none(i);
  html_class_add(i, "ri-focus-3-line");
  let v = g_img_square_size_css();
  let size = text_combine_multiple(["calc(", v, "*.9)"]);
  let v2 = g_img_square_size_css();
  let glow = text_combine_multiple(["calc(", v2, "*.06)"]);
  html_style_assign(i, {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    color: "#ffd633",
    "text-shadow": text_combine_multiple(["0 0 ", glow, " #ffb300"]),
    "font-size": size,
  });
  g_img_square_style_position(i, npc, "icon");
  return i;
}
