import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_fraction } from "./app_g_day_fraction.mjs";
import { app_g_day_slice_weights } from "./app_g_day_slice_weights.mjs";
import { g_day_sky_phase } from "./g_day_sky_phase.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_sky_snap } from "./app_g_sky_snap.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { positive_is } from "./positive_is.mjs";
import { not } from "./not.mjs";
export async function app_g_day_sky_update() {
  "paint the #day_unbelievers sky for the current slice clock: app_g_day_fraction turns (people reached + progress through the current person-leg) into a day fraction, g_day_sky_phase turns that into the clock-anchored phase, then g.sky_phase is set and the tint snapped. so the sky rides sunrise→sunset as the player closes distance on each person and reaches them. no-op until the day is set up (slices_total > 0)";
  let state = app_g_day_state();
  let slices_total = property_get(state, "slices_total");
  if (not(positive_is(slices_total))) {
    return;
  }
  let slices_done = property_get(state, "slices_done");
  let target_start = property_get(state, "target_start");
  let target_best = property_get(state, "target_best");
  let weights = app_g_day_slice_weights();
  let walk_weight = property_get(weights, "walk");
  let conversation_weight = property_get(weights, "conversation");
  let fraction = app_g_day_fraction(
    slices_done,
    slices_total,
    target_start,
    target_best,
    walk_weight,
    conversation_weight,
  );
  let phase = g_day_sky_phase(fraction);
  let g = await app_g_game_save_get();
  property_set(g, "sky_phase", phase);
  await app_g_sky_snap();
}
