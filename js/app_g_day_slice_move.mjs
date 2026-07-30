import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { g_distance_walk } from "./g_distance_walk.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
export async function app_g_day_slice_move(player) {
  ("track the player's approach WITHIN the current person-leg of the #day_unbelievers day: whenever they beat their smallest-ever WALKABLE-path distance to the discerned person (target_best), record it and repaint the sky (which moves in proportion to distance closed). measured as ",
    g_distance_walk.name,
    " (steps along the path around water), NOT taxicab — so every real step toward the person advances the clock, instead of freezing on the detour steps where straight-line distance holds or grows. moving away or circling still leaves target_best untouched, so the clock never runs backward and wandering costs no time. no-op when nobody is discerned (target null). called after every move via the guide-show step, before its adjacency branch, so the final approach step counts before the person converts. the guide-show step's name is deliberately NOT spelled as a live reference here: it imports THIS function, so a back-reference would form an import cycle");
  let state = app_g_day_state();
  let target = property_get(state, "target");
  if (null_is(target)) {
    return;
  }
  let g = await app_g_game_save_get();
  let distance = g_distance_walk(g, player, target);
  let best = property_get(state, "target_best");
  if (null_is(best) || less_than(distance, best)) {
    property_set(state, "target_best", distance);
  }
  await app_g_day_sky_update();
}
