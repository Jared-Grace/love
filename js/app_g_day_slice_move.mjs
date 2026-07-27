import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { g_progress_gain } from "./g_progress_gain.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
import { add } from "./add.mjs";
export async function app_g_day_slice_move(player) {
  "advance the #day_unbelievers movement clock as the player walks toward the discerned person: time passes ONLY when they get CLOSER than ever before (g_progress_gain over target_best, the smallest distance reached so far). backtracking or circling costs nothing, so the whole travel to a person costs EXACTLY its starting distance and completes at adjacency — the slice is solved, not estimated. no-op when nobody is discerned (target null). called after every move via app_g_day_guide_show";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return;
  }
  let distance = g_distance_taxicab(player, target);
  let best = property_get(state, "target_best");
  let gain = g_progress_gain(best, distance);
  let slices = property_get(state, "slices");
  property_set(state, "slices", add(slices, gain));
  if (null_is(best)) {
    property_set(state, "target_best", distance);
  } else if (less_than(distance, best)) {
    property_set(state, "target_best", distance);
  }
  await app_g_day_sky_update();
}
