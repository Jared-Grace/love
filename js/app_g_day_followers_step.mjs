import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { app_g_day_follower_delay_seconds } from "./app_g_day_follower_delay_seconds.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
import { each_index } from "./each_index.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function app_g_day_followers_step() {
  "one step of the line: everybody walking behind the player moves up one, into the tile the person ahead of them is leaving. the first of them steps into the tile the player has just left, which is what makes a line rather than a crowd";
  "where each of them is going is read off the day's TRAIL - the tiles the player has walked, newest first - so the person at place N in the line walks to the Nth tile back. reading it from the trail rather than from where the people are standing is what lets somebody who has only just joined be in the line at all: they were put on their tile of it when they were gathered, not left to be shuffled into place";
  "each place further back sets off a little later than the one in front, so the line ripples forward instead of sliding as one piece";
  "a trail shorter than the line means those at the back have nowhere yet to walk to - the day has not been walked far enough to have left tiles for them - so they simply wait where they are";
  let followers = app_g_day_state_property("followers");
  let none = list_empty_is(followers);
  if (none) {
    return;
  }
  let trail = app_g_day_state_property("trail");
  let length = list_size(trail);
  function step(npc, index) {
    let known = less_than(index, length);
    if (not(known)) {
      return;
    }
    let to = list_get(trail, index);
    let delay = app_g_day_follower_delay_seconds(index);
    app_g_npc_move(npc, to, delay);
  }
  each_index(followers, step);
}
