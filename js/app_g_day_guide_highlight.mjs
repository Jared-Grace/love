import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_glow_correct } from "./app_shared_glow_correct.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
export function app_g_day_guide_highlight(div_map, coords) {
  "the gold guide-tile overlay — styled like a DISCERNED CORRECT Bible answer: carried by the SHARED gold→white 'correct answer' pulse (the same glow the pray-for-discernment reveal uses, DRY) over a soft gold fill. glow-FORWARD — only a faintly rounded edge, no hard border. pointer-events none so the tap falls THROUGH to the map, moving the player there";
  let i = html_element(div_map, "i");
  html_click_none(i);
  html_style_assign(i, {
    "box-sizing": "border-box",
    "border-radius": "20%",
    background: "rgba(255, 214, 51, 0.22)",
  });
  app_shared_glow_correct(i);
  g_img_square_style_position(i, coords, "icon");
  return i;
}
