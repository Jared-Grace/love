import { app_g_player_walk_state } from "./app_g_player_walk_state.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
export function app_g_player_walk_begin() {
  "say that a new walk is starting, and hand it the number it can be recognised by afterwards";
  "setting one off is what stops the one before it. there is no separate asking anybody to stop, because a tap that sends the player somewhere IS the whole of what a player means by stopping them - and a stop that had to be asked for separately could be forgotten at one of the places a walk begins";
  let state = app_g_player_walk_state();
  let before = property_get(state, "walk");
  let walk = add(before, 1);
  property_set(state, "walk", walk);
  return walk;
}
