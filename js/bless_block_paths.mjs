import { arguments_assert } from "./arguments_assert.mjs";
import { list_flat } from "./list_flat.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { list_map } from "./list_map.mjs";
export function bless_block_paths(doors, sidewalk_y) {
  arguments_assert(arguments, 2);
  ("The paved paths of one block - one strip of pavement running from every doorstep across the grass to the pavement, a square wide.");
  ("A path per DOOR rather than one per building, because a door is where a household comes out. A building holds two, three or four families and each of them owns the square of front its own door is in; giving the building one path would put four households onto one neighbour's garden path.");
  ("It is a square wide for the same reason a door is: the path is the door continued, and anything wider would be a driveway, which says a car, which this street has none of.");
  ("It starts at the DOORSTEP and stops one row short of the pavement, so the two meet without either being drawn over the other. The doorstep is already measured off the door itself, so a house set back in its slot gets the longer path automatically and a house standing flush with its garden gets the single square - neither is asked for, both fall out of where the door ended up.");
  ("It is what makes the grass read as a garden rather than as a field the houses were dropped into. A strip of green with nothing crossing it is somewhere nobody goes; the same strip with a path over it is somewhere somebody lives, and the path is the shortest sentence the street can say about that.");
  let steps = list_flat(doors);
  function path_at(step) {
    let at = property_get(step, "x");
    let from = property_get(step, "y");
    let along = subtract(sidewalk_y, from);
    let tiles = bless_tiles_rectangle(at, from, 1, along);
    return tiles;
  }
  let paths_each = list_map(steps, path_at);
  let paths = list_flat(paths_each);
  return paths;
}
