import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_day_line_game_without } from "./app_g_day_line_game_without.mjs";
export function app_g_day_line_blocking_is(g, player, to) {
  "true when the ONLY thing between the player and where they want to go is the line walking behind them.";
  "Asked before a tap is refused, because a refusal is the wrong answer to it. The people behind the player are people, so they stand in the way like anybody else - but they are also the player's own line, following where the player went, and a line that can seal its leader in is a line that has stopped being one.";
  "Two questions, and both have to be answered for the answer to be yes: there is no way there now, and there WOULD be a way if the line were not standing on it. Asking only the second would back the procession down its own trail every time somebody taps across a river, which is a long walk to reach the same nowhere.";
  let followers = app_g_day_state_property("followers");
  let none = list_empty_is(followers);
  if (none) {
    return false;
  }
  let path = g_coordinates_path_shortest(g, player, to);
  let reachable = list_empty_not_is(path);
  if (reachable) {
    return false;
  }
  let without = app_g_day_line_game_without(g);
  let path_without = g_coordinates_path_shortest(without, player, to);
  let free = list_empty_not_is(path_without);
  return free;
}
