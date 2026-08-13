import { app_g_player_walk_state } from "./app_g_player_walk_state.mjs";
import { app_g_player_walk_stopped_is } from "./app_g_player_walk_stopped_is.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_player_walk_end(walk) {
  "say that the walk with this number is over, whether it ran to the end of its path or was cut short partway";
  "a walk that has already been left behind by a newer one says nothing at all here. the newer walk is the one still going, and an older one writing down that the walking had finished would leave the player sliding along with the menu open to them and nothing able to stop them - which is exactly the pair of walks this whole count exists to tell apart";
  "said however the walk ends, including one that throws partway. a walk that never says it finished leaves the player walking for ever as far as anybody asking is concerned, and the menu unreachable with it";
  let stopped = app_g_player_walk_stopped_is(walk);
  if (stopped) {
    return;
  }
  let state = app_g_player_walk_state();
  property_set(state, "ended", walk);
}
