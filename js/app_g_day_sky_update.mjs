import { app_g_day_state } from "./app_g_day_state.mjs";
import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
import { divide } from "./divide.mjs";
export async function app_g_day_sky_update() {
  "advance the #day_unbelievers sky to match elapsed SLICES: fraction = slices / slices_total → the clock-anchored day phase (g_day_sky_phase) → g.sky_phase, then snap the tint. so the sky rides sunrise→sunset as the player walks and stub-converts (TIME passing), not per equal conversation-step. no-op until the day is set up (slices_total > 0)";
  let state = app_g_day_state();
  let total = property_get(state, "slices_total");
  if (not(positive_is(total))) {
    return;
  }
  let slices = property_get(state, "slices");
  let fraction = divide(slices, total);
  let phase = g_day_sky_phase(fraction);
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", phase);
  await app_g_sky_snap();
}
