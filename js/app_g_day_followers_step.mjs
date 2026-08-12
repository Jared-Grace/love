import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { app_g_day_follower_move } from "./app_g_day_follower_move.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { subtract } from "./subtract.mjs";
export function app_g_day_followers_step(from) {
  "one step of the line: everybody walking behind the player moves up one, into the tile the person ahead of them is leaving. the first of them steps into the tile the player has just left, which is what makes a line rather than a crowd";
  "where each of them is going is read off the whole line BEFORE anybody moves, and read as a copy, because moving somebody overwrites the very place the person behind them was told to walk to";
  let followers = app_g_day_state_property("followers");
  let none = list_empty_is(followers);
  if (none) {
    return;
  }
  function place(npc) {
    let x = property_get(npc, "x");
    let y = property_get(npc, "y");
    let coordinates = {
      x,
      y,
    };
    return coordinates;
  }
  let places = list_map(followers, place);
  let size = list_size(places);
  let last_dropped = subtract(size, 1);
  let destinations = list_take(places, last_dropped);
  list_add_first(destinations, from);
  function step(npc, index) {
    let to = list_get(destinations, index);
    app_g_day_follower_move(npc, to);
  }
  each_index(followers, step);
}
