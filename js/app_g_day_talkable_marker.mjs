import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_class_add } from "./html_class_add.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_day_talkable_marker(div_map, npc) {
  "a soft glowing speech-bubble icon floating over a talkable NPC in the #day_unbelievers demo — marks who you may approach today. deliberately NOT gold (gold is reserved for the discernment highlight) and NOT green (that is the believer cross): a calm light-cyan so all three read as 'available' at a glance";
  let i = html_element(div_map, "i");
  html_click_none(i);
  html_class_add(i, "ri-chat-3-fill");
  let v = g_img_square_size_css();
  let size = text_combine_multiple(["calc(", v, "*.42)"]);
  let v2 = g_img_square_size_css();
  let glow = text_combine_multiple(["calc(", v2, "*.03)"]);
  html_style_assign(i, {
    display: "flex",
    "justify-content": "center",
    "align-items": "flex-start",
    color: "#5ec8ff",
    "text-shadow": text_combine_multiple(["0 0 ", glow, " #072a44"]),
    "font-size": size,
  });
  g_img_square_style_position(i, npc, "icon");
  return i;
}
