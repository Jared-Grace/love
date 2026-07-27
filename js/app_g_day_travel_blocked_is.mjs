import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
export function app_g_day_travel_blocked_is(clicked) {
  "force-righteousness for MOVEMENT in #day_unbelievers: once discernment is prayed the Holy Spirit LEADS, so the player may step ONLY to the single glowing guide tile (which, when the person is on-screen, IS the person's tile) — not wander to a different tile. returns TRUE (so app_g_click_map drops the tap) when a target is discerned and the tap is NOT the guide tile; FALSE for the normal game and for the allowed guide-tile tap. SILENT block (no dove) so stray taps don't spam an overlay — the glowing tile already shows the one place to go. mirrors the talk-block app_g_day_blocked_is, for tiles instead of people";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return false;
  }
  let guide_coords = property_get(state, "guide_coords");
  if (null_is(guide_coords)) {
    return true;
  }
  let same_x = equal(property_get(clicked, "x"), property_get(guide_coords, "x"));
  let same_y = equal(property_get(clicked, "y"), property_get(guide_coords, "y"));
  if (and(same_x, same_y)) {
    return false;
  }
  return true;
}
