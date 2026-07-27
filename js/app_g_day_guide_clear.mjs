import { app_g_day_state } from "./app_g_day_state.mjs";
import { html_remove } from "./html_remove.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function app_g_day_guide_clear() {
  "tear down the live gold guide tile: remove its element (if any) and forget BOTH the element (state.guide) and its coords (state.guide_coords — the one tile the movement-lock allows). the single place the guide is cleared, shared by app_g_day_guide_show (before drawing the next tile) and app_g_day_convert_tap_if (on arrival), so the element and its allowed-tile coords can never fall out of sync — e.g. a removed element leaving a stale guide_coords that the movement-lock would still accept";
  let state = app_g_day_state();
  let guide = property_get(state, "guide");
  if (not(null_is(guide))) {
    html_remove(guide);
  }
  property_set(state, "guide", null);
  property_set(state, "guide_coords", null);
}
