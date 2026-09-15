import { not_equal } from "./not_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { g_distance_taxicab } from "./g_distance_taxicab.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_size } from "./list_size.mjs";
export function app_g_hero_hunt_path(alone, npcs, evil) {
  arguments_assert(arguments, 3);
  ("The way to the nearest person the hunter can actually reach, or null when nobody can be reached.");
  ("Nearest is judged in a straight count of squares first, and people are tried in that order until one has a way to them. The nearest by count can be across water or behind a wall with no way round, and a hunter that only ever tried them would stand still for good.");
  let others = [];
  for (let person of npcs) {
    if (not_equal(person, evil)) {
      list_add(others, person);
    }
  }
  function apart(person) {
    let d = g_distance_taxicab(evil, person);
    return d;
  }
  list_sort_number_mapper(others, apart);
  for (let person of others) {
    let path = g_coordinates_path_shortest(alone, evil, person);
    let size = list_size(path);
    if (greater_than_equal(size, 2)) {
      return path;
    }
  }
  return null;
}
