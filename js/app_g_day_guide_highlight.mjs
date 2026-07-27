import { html_border_radius } from "./html_border_radius.mjs";
import { html_element } from "./html_element.mjs";
import { html_click_none } from "./html_click_none.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { app_shared_scripture_gold } from "./app_shared_scripture_gold.mjs";
import { app_g_day_guide_keyframe } from "./app_g_day_guide_keyframe.mjs";
import { g_img_square_style_position } from "./g_img_square_style_position.mjs";
export function app_g_day_guide_highlight(div_map, coords) {
  ("the gold guide tile — reads as a discerned correct Bible answer, and BREATHES: the same gold outline (",
    app_shared_scripture_gold.name,
    ") under a pulse that glows gold→white while its fill fades inversely — near-solid gold at the glow's smallest, see-through (terrain shows) at its widest. pointer-events none so the tap falls THROUGH to the map. drawn at ground_tint z (BELOW characters) so the player walks OVER the glow");
  let i = html_element(div_map, "i");
  html_click_none(i);
  app_shared_scripture_gold(i);
  html_border_radius(i, "18%");
  let style_text = app_g_day_guide_keyframe();
  html_style_head(style_text);
  html_style_set(
    i,
    "animation",
    "g_day_guide_pulse 2s ease-in-out infinite alternate",
  );
  g_img_square_style_position(i, coords, "ground_tint");
  return i;
}
