import { app_g_player_walk_state } from "./app_g_player_walk_state.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
export function app_g_player_walk_stopped_is(walk) {
  "has the walk with this number been left behind by a newer one";
  "asked BETWEEN steps rather than during one. a slide that has begun is finished either way - stopping halfway between two tiles would leave the player standing on neither of them";
  let state = app_g_player_walk_state();
  let newest = property_get(state, "walk");
  let stopped = equal_not(walk, newest);
  return stopped;
}
