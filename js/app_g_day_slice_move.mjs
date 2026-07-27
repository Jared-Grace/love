import { app_g_day_state } from "./app_g_day_state.mjs";
import { app_g_day_sky_update } from "./app_g_day_sky_update.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export async function app_g_day_slice_move(player) {
  "count a MOVEMENT slice for the #day_unbelievers day: measure the taxicab hop-distance from the player's last {x,y} snapshot to now, add it to the elapsed slices, re-snapshot, and advance the sky. the first tick is a no-op (last_pos = the day's start, so 0 moved). called after every move while a person is discerned, so the day's TIME rides the walking, not just the conversations";
  let state = app_g_day_state();
  let last = property_get(state, "last_pos");
  let x = property_get(player, "x");
  let y = property_get(player, "y");
  if (not(null_is(last))) {
    let moved = g_distance_taxicab(player, last);
    let slices = property_get(state, "slices");
    property_set(state, "slices", add(slices, moved));
  }
  property_set(state, "last_pos", {
    x,
    y,
  });
  await app_g_day_sky_update();
}
