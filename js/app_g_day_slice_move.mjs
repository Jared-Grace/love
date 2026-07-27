import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
export async function app_g_day_slice_move(player) {
  "track the player's approach WITHIN the current person-leg of the #day_unbelievers day: whenever they beat their smallest-ever distance to the discerned person (target_best), record it and repaint the sky (which moves in proportion to distance closed). moving away or circling leaves target_best untouched, so the clock never runs backward and wandering costs no time. no-op when nobody is discerned (target null). called after every move via app_g_day_guide_show, before its adjacency branch, so the final approach step counts before the person converts";
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return;
  }
  let distance = g_distance_taxicab(player, target);
  let best = property_get(state, "target_best");
  if (null_is(best)) {
    property_set(state, "target_best", distance);
  } else if (less_than(distance, best)) {
    property_set(state, "target_best", distance);
  }
  await app_g_day_sky_update();
}
