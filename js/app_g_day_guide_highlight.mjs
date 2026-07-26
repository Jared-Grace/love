import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_scripture_gold } from "./app_shared_scripture_gold.mjs";
import { app_shared_glow_correct } from "./app_shared_glow_correct.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
export function app_g_day_guide_highlight(div_map, coords) {
  "the gold guide tile — styled to READ as a discerned correct Bible answer, not a faint tint over the terrain: the same gold SURFACE the revealed answer uses (soft-gold fill + subtle gold outline) carrying the same 'correct answer' PULSE glow, both DRY. pointer-events none so the tap falls THROUGH to the map, moving the player there";
  let i = html_element(div_map, "i");
  html_click_none(i);
  app_shared_scripture_gold(i);
  html_style_set(i, "border-radius", "18%");
  app_shared_glow_correct(i);
  g_img_square_style_position(i, coords, "icon");
  return i;
}
