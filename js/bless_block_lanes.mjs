import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { range_map } from "./range_map.mjs";
export function bless_block_lanes(block) {
  arguments_assert(arguments, 1);
  ("The lanes of one block road: which row each one runs along, how far it reaches either");
  ("way, and which way traffic on it goes.");
  ("Read off the ROAD TILES themselves rather than off the numbers that laid them. The block");
  ("that comes back from building keeps its road as a list of squares and keeps no record of");
  ("where it put them - no row, no left edge, no width - so there is nothing to ask. Measuring");
  ("the squares is not a workaround for that: it is the reading that cannot drift. The road");
  ("could be moved a row further from the houses, or made deeper, or shortened, and this would");
  ("go on describing the road that is actually there.");
  ("One lane per ROW of road. That is what a row is - a strip one car wide running the length");
  ("of the street - and it means a road two deep has two lanes and a road three deep would");
  ("have three without anything here having to change.");
  ("Traffic runs on the RIGHT, which is what makes the two lanes tell a story rather than");
  ("just being two rows with cars on them. The row nearer the houses is the far side of the");
  ("road as a driver sees it, so it carries traffic going WEST, and the row further out");
  ("carries traffic going EAST. Read from the pavement that is: the near stream goes left to");
  ("right along the bottom of the road, the far stream right to left along the top - which is");
  ("what a two-way street looks like from above, and what tells a player at a glance that the");
  ("two lines of cars are not one crowd.");
  ("Taken in turn and counted round, so a road of any depth alternates rather than needing a");
  ("list as long as it is deep.");
  let road = property_get(block, "road");
  let sides = tiles_sides(road);
  let left = property_get(sides, "left");
  let right = property_get(sides, "right");
  let top = property_get(sides, "top");
  let bottom = property_get(sides, "bottom");
  let rows_below = subtract(bottom, top);
  let rows = add(rows_below, 1);
  let ways = ["west", "east"];
  function lane_at(index) {
    let y = add(top, index);
    let way = list_get_wrap(ways, index);
    let lane = {
      y: y,
      left: left,
      right: right,
      direction: way,
    };
    return lane;
  }
  let lanes = range_map(rows, lane_at);
  return lanes;
}
