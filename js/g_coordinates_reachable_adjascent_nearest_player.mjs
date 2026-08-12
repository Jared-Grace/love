import { g_coordinates_neighbors_walkable } from "./g_coordinates_neighbors_walkable.mjs";
import { g_coordinates_nearest_player_try } from "./g_coordinates_nearest_player_try.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function g_coordinates_reachable_adjascent_nearest_player(
  g,
  player,
  coordinates,
) {
  "the tile beside this one that is nearest the player and that the player can both stand on AND get to without walking through anybody.";
  "Free to stand on is not the same as free to reach. Beside somebody at the end of a one-wide way the far side can be empty while the only way to it runs straight through the person being walked up to - so asking only whether the tile is free answers the far side, and the walk then pushes the very person the player was going to see out of their place and past them.";
  "Asking for a way around as well is what keeps the undisturbed answer undisturbed: a tile is preferred for costing nobody anything only when getting there costs nobody anything either. When nothing beside them can be reached that way, the answer is nothing, and the nearest ground is asked for instead - and then the crowd makes room.";
  let neighbors = g_coordinates_neighbors_walkable(g, coordinates);
  function lambda_reachable(neighbor) {
    let around = g_coordinates_path_shortest(g, player, neighbor);
    let open = list_empty_not_is(around);
    return open;
  }
  let reachable = list_filter(neighbors, lambda_reachable);
  let nearest = g_coordinates_nearest_player_try(player, reachable);
  return nearest;
}
