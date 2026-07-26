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
  let size = text_combine_multiple(["calc(", g_img_square_size_css(), "*.35)"]);
  let glow = text_combine_multiple(["calc(", g_img_square_size_css(), "*.05)"]);
  html_style_assign(i, {
    display: "flex",
    "justify-content": "center",
    "align-items": "flex-start",
    color: "#bfe4ff",
    "text-shadow": text_combine_multiple([
      "0 0 ",
      glow,
      " white, 0 0 ",
      glow,
      " #7fbfff",
    ]),
    "font-size": size,
  });
  g_img_square_style_position(i, npc, "icon");
  return i;
}
