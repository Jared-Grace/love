import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_class_add } from "./html_class_add.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_day_talkable_marker(div_map, npc) {
  "a small WHITE speech-bubble icon (black outline) in the UPPER-LEFT of a talkable NPC's tile — marks who you may approach today. flipped across the y-axis so its tail mirrors, and kept upper-LEFT so it never collides with the believer CROSS (which sits upper-right). white + outline reads distinct from the gold discern reticle and the green cross. NOTE: with scaleX(-1) the box mirrors too, so justify-content flex-END lands the glyph on the LEFT";
  let i = html_element(div_map, "i");
  html_click_none(i);
  html_class_add(i, "ri-chat-3-fill");
  let v = g_img_square_size_css();
  let size = text_combine_multiple(["calc(", v, "*.3)"]);
  html_style_assign(i, {
    display: "flex",
    "justify-content": "flex-end",
    "align-items": "flex-start",
    transform: "scaleX(-1)",
    color: "white",
    "text-shadow":
      "0.06em 0 black, -0.06em 0 black, 0 0.06em black, 0 -0.06em black",
    "font-size": size,
  });
  g_img_square_style_position(i, npc, "icon");
  return i;
}
