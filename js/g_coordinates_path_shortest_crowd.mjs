import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { g_world_without_npcs } from "./g_world_without_npcs.mjs";
export function g_coordinates_path_shortest_crowd(g, start, target) {
  arguments_assert(arguments, 3);
  ("The way to a tile through a street full of people - round them where there is room, and");
  ("past them where there is not.");
  ("Asked twice on purpose, and the order is the whole of it. The first question is the");
  ("ordinary one, where somebody standing still is something to walk around, and it is");
  ("answered whenever the street has any room left in it at all - so an ordinary walk is");
  ("unchanged.");
  ("The second is only reached when there is no way whatever, which on a busy pavement means");
  ("the walker is hemmed in by neighbours rather than shut in by water or a wall. Standing");
  ("still until somebody moves is the wrong answer to that: measured on a full pavement,");
  ("every one of the four tiles around a person was taken, so a tap anywhere did nothing and");
  ("the street looked broken.");
  ("Walking past somebody is a thing people do, and it is what a crowd is - a wall is not.");
  ("The people are left standing where they stand either way; only this reading is blind to");
  ("them.");
  let path = g_coordinates_path_shortest(g, start, target);
  let hemmed = not(path);
  if (hemmed) {
    let alone = g_world_without_npcs(g);
    let through = g_coordinates_path_shortest(alone, start, target);
    return through;
  }
  return path;
}
