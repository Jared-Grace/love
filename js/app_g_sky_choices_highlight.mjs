import { property_equals } from "./property_equals.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_time_current_index } from "./g_time_current_index.mjs";
import { app_g_sky_pill_style } from "./app_g_sky_pill_style.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export async function app_g_sky_choices_highlight() {
  "restyle the #day_parts choice pills so the one matching the CURRENT sky (the anchor nearest the live phase) is active/selected — called on render, after a jump, and after each walk-step, so the you-are-here marker always tracks the live sky. reads the pills the choice panel stashed on this function; a no-op when the panel isn't up (the real game), so the demo-only step path can call it blindly";
  let up = global_function_property_exists(
    app_g_sky_choices_highlight,
    "pills",
  );
  if (not(up)) {
    return;
  }
  let pills = global_function_property_get(
    app_g_sky_choices_highlight,
    "pills",
  );
  let g = await app_g_game_save_get();
  let current = g_time_current_index(g);
  function restyle(pill) {
    let button = property_get(pill, "button");
    let active = property_equals(pill, "index", current);
    app_g_sky_pill_style(button, active);
  }
  each(pills, restyle);
}
