import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { g_distance } from "./g_distance.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { app_g_day_followers_step } from "./app_g_day_followers_step.mjs";
export function app_g_day_line_turn(g, arrived) {
  "the player has walked back through their own line: put the line back in the order the people are now standing in, nearest the player first, and close it up behind them.";
  "Passing somebody in a corridor trades places with them, so a player who walks past their whole line comes out at the far end of it with everybody in the opposite order - the one who was at the back is now the one nearest. Read the other way round, the line simply turned around, which is what a line of people following somebody does when that person walks past them.";
  "Nearest-first is the whole ordering, and it is read off where they are standing rather than remembered, so it is right however the walk went - straight back down a corridor, or across the line rather than along it.";
  "Closing up is the ordinary line step, asked once: each of them walks to their own tile of the trail, which is now the way the player has just come. Without it the line stays spread out over the tiles they were traded into, one place behind where the trail says the line is.";
  "where the player has ARRIVED is handed in rather than read off the player, because the tile they are standing on is written down after the walk, not during it - read here it would still say where they set off from, and the line would be put back in the order it was in before they passed it";
  let followers = app_g_day_state_property("followers");
  function nearness(npc) {
    let distance = g_distance(arrived, npc);
    return distance;
  }
  list_sort_number_mapper(followers, nearness);
  app_g_day_followers_step(g);
}
