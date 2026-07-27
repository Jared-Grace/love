import { property_get } from "./property_get.mjs";
import { html_id_set } from "./html_id_set.mjs";
import { app_g_npc_color } from "./app_g_npc_color.mjs";
import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_class_add } from "./html_class_add.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { g_img_square_size_css } from "./g_img_square_size_css.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_day_talkable_marker(div_map, npc) {
  "a small speech-bubble icon (black outline) in the UPPER-LEFT of a talkable NPC's tile — marks who you may approach today. FILLED with that NPC's own conversation colour (gender pink/blue, single-sourced) so the marker matches the bubble their real conversation uses (UI consistency); the black outline keeps it legible over any terrain. flipped across the y-axis so its tail mirrors, kept upper-LEFT so it never collides with the believer CROSS (upper-right). NOTE: with scaleX(-1) the box mirrors too, so justify-content flex-END lands the glyph on the LEFT";
  let i = html_element(div_map, "i");
  html_click_none(i);
  html_class_add(i, "ri-chat-3-fill");
  let mx = property_get(npc, "x");
  let my = property_get(npc, "y");
  let u = text_combine_multiple(["day-talkable-", mx, "-", my]);
  html_id_set(i, u);
  let v = g_img_square_size_css();
  let size = text_combine_multiple(["calc(", v, "*.3)"]);
  let color = app_g_npc_color(npc);
  html_style_assign(i, {
    display: "flex",
    "justify-content": "flex-end",
    "align-items": "flex-start",
    transform: "scaleX(-1)",
    color,
    "text-shadow":
      "0.06em 0 black, -0.06em 0 black, 0 0.06em black, 0 -0.06em black",
    "font-size": size,
  });
  g_img_square_style_position(i, npc, "icon");
  return i;
}
