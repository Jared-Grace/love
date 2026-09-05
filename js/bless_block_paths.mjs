import { arguments_assert } from "./arguments_assert.mjs";
import { list_flat } from "./list_flat.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { list_map } from "./list_map.mjs";
export function bless_block_paths(doors, road_y) {
  arguments_assert(arguments, 2);
  ("The driveways of one block - one strip of concrete running from every front door out to the road, a square wide.");
  ("One per DOOR rather than one per building, because a door is where a household comes out. A building holds two, three or four families and each of them owns the square of front its own door is in; giving the building one drive would put four households onto one neighbour's.");
  ("It is a square wide for the same reason a door is: the drive is the door continued, and it stays that width the whole way so that it reads as belonging to the one house it started at.");
  ("It runs from the DOORSTEP all the way to the road, crossing the pavement and both rows of grass, and stops one row short of the road so the two meet without either being drawn over the other. Stopped at the pavement instead it was a garden path, which said the house had a front garden and nothing else; run to the road it says the house has a way OUT, and the whole street then reads as somewhere people leave from and come back to.");
  ("The doorstep it starts at is already measured off the door itself, so a house set back in its slot gets the longer drive and a house standing flush gets the shorter one - neither is asked for, both fall out of where the door ended up.");
  ("It is also what makes the grass read as gardens rather than as a field the houses were dropped into. A band of green with nothing crossing it is somewhere nobody goes; the same band cut into pieces by a drive from every door is a row of front gardens, and each piece plainly belongs to the house behind it.");
  let steps = list_flat(doors);
  function path_at(step) {
    let at = property_get(step, "x");
    let from = property_get(step, "y");
    let along = subtract(road_y, from);
    let tiles = bless_tiles_rectangle(at, from, 1, along);
    return tiles;
  }
  let paths_each = list_map(steps, path_at);
  let paths = list_flat(paths_each);
  return paths;
}
