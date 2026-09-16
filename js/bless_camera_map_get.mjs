import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function bless_camera_map_get(div_map) {
  arguments_assert(arguments, 1);
  ("The screen a map was drawn on, asked of the map itself.");
  ("A camera journey needs two things that sound like one: the box the street scrolls");
  ("inside, and the screen that box was put on. The second is where the crowd is noted and");
  ("where the street is held still while the squares change size, so a journey handed only");
  ("the first would resize a street full of people who then crawl after the ground.");
  ("Asked here rather than carried, because the places that ask for a journey - a walk");
  ("stopping at a kerb, a victory that makes the player taller - were handed a map and a");
  ("player and have no reason to know a screen exists.");
  let container_map = property_get(div_map, "container_map");
  return container_map;
}
