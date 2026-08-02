import { fn_name } from "./fn_name.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
export function app_g_day_travel_blocked_is(clicked) {
  ("force-righteousness for MOVEMENT in #day_unbelievers: once discernment is prayed the Holy Spirit LEADS, so the player may step ONLY to the single glowing guide tile (which, when the person is on-screen, IS the person's tile) — not wander to a different tile. returns TRUE (so ",
    fn_name("app_g_click_map"),
    " drops the tap AND shows the HS overlay ",
    fn_name("app_g_discern_prevented_overlay"),
    ", the same dove the conversation boundary shows) when a target is discerned and the tap is NOT the guide tile; FALSE for the normal game and for the allowed guide-tile tap. mirrors the talk-block ",
    fn_name("app_g_day_blocked_is"),
    ", for tiles instead of people");
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return false;
  }
  ("no guide tile means the leading failed, not that every step is forbidden. blocking here traps the player: the gold square they are told to step on does not exist, so whatever they tap is 'a different tile' and the dove answers every tap for ever, with nothing they can do to get out. a walk that goes somewhere the Spirit did not name is the smaller wrong of the two, and it leaves the day playable while the leading is repaired");
  let guide_coords = property_get(state, "guide_coords");
  if (null_is(guide_coords)) {
    return false;
  }
  if (g_coordinates_same_is(clicked, guide_coords)) {
    return false;
  }
  return true;
}
