import { g_coordinates_neighbors_walkable_get } from "./g_coordinates_neighbors_walkable_get.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { g_distance_curried } from "./g_distance_curried.mjs";
import { list_shuffle_sort_number_mapper_first } from "./list_shuffle_sort_number_mapper_first.mjs";
export function g_coordinates_reachable_adjascent_nearest_player(
  g,
  player,
  coordinates,
) {
  "the tile beside this one that is nearest the player and that the player can both stand on AND get to without walking through anybody.";
  "Free to stand on is not the same as free to reach. Beside somebody at the end of a one-wide way the far side can be empty while the only way to it runs straight through the person being walked up to - so asking only whether the tile is free answers the far side, and the walk then pushes the very person the player was going to see out of their place and past them.";
  "Asking for a way around as well is what keeps the undisturbed answer undisturbed: a tile is preferred for costing nobody anything only when getting there costs nobody anything either. When nothing beside them can be reached that way, the answer is nothing, and the nearest ground is asked for instead - and then the crowd makes room.";
  let neighbors_get = g_coordinates_neighbors_walkable_get(g);
  function lambda(n) {
    let neighbor = property_get(n, "neighbor");
    return neighbor;
  }
  let neighbors = neighbors_get(coordinates).map(lambda);
  function lambda_reachable(neighbor) {
    let around = g_coordinates_path_shortest(g, player, neighbor);
    let open = list_empty_not_is(around);
    return open;
  }
  let reachable = list_filter(neighbors, lambda_reachable);
  let none = list_empty_is(reachable);
  if (none) {
    return null;
  }
  let distance = g_distance_curried(player);
  let nearest = list_shuffle_sort_number_mapper_first(reachable, distance);
  return nearest;
}
