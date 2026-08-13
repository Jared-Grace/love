import { app_g_player_walk_state } from "./app_g_player_walk_state.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
export function app_g_player_walking_is() {
  "is the player in the middle of a walk at this moment";
  "the newest walk set off, against the newest one seen through to its end. while they differ somebody is still walking; the moment they agree, everything that was going has finished";
  "asked when a tap lands, to tell apart the two things a tap on the player can mean. standing still it means the menu; walking it means stop here, which is what the tile they are standing on says on its own";
  let state = app_g_player_walk_state();
  let walk = property_get(state, "walk");
  let ended = property_get(state, "ended");
  let walking = equal_not(walk, ended);
  return walking;
}
