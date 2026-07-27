import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_convert } from "./app_g_day_convert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { g_coordinates_same_is } from "./g_coordinates_same_is.mjs";
import { app_g_day_guide_clear } from "./app_g_day_guide_clear.mjs";
export async function app_g_day_convert_tap_if(div_map, npc) {
  "in the #day_unbelievers stub, tapping the DISCERNED target person IS the (stubbed) conversation — short-circuit to an instant GREEN believes cross (app_g_day_convert) instead of opening the real quiz, clear the target + gold guide, and report TRUE so app_g_click_npc stops. returns FALSE for the normal game and for any non-target tap (nobody discerned, or a different person — the blocked-gate dove handles that), so it is safe to call from the shared NPC-tap. this is how the route exercises the macro cycle (walk → conversation → sky) without playing turns; the real conversation has its own #";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return false;
  }
  if (not(g_coordinates_same_is(npc, target))) {
    return false;
  }
  property_set(state, "target", null);
  app_g_day_guide_clear();
  await app_g_day_convert(div_map, npc);
  return true;
}
