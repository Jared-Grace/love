import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { g_distance } from "./g_distance.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { app_g_day_followers_step } from "./app_g_day_followers_step.mjs";
export function app_g_day_line_turn(g, arrived) {
  "the player has walked past their own line, trading places with each of them, so the line has ended up in the opposite order - re-order it by who is nearest now, and close it up onto the trail.";
  "arrived is handed in because the player's tile is written down after the walk, not during it.";
  let followers = app_g_day_state_property("followers");
  function nearness(npc) {
    let distance = g_distance(arrived, npc);
    return distance;
  }
  list_sort_number_mapper(followers, nearness);
  app_g_day_followers_step(g);
}
