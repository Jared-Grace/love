import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_map } from "./list_map.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { range } from "./range.mjs";
import { subtract } from "./subtract.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { bless_sidewalk_depth } from "./bless_sidewalk_depth.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
export function bless_block(x, y) {
  arguments_assert(arguments, 2);
  ("One block, given as the tiles it covers - a row of buildings facing south, a pavement");
  ("running the whole length of their fronts, and the door each building opens onto.");
  ("The tile named is the north-west corner of the first building, and everything else is");
  ("measured from it going east and south.");
  ("How many buildings there are is NOT written here. It is how many buildings the ladder");
  ("says a block holds, so the thing the player looks at and the thing the prayer counts");
  ("cannot disagree - and covering every building in sight is exactly what earns the block.");
  ("Written down twice, one of them would be corrected one day and the other would not, and");
  ("the game would announce a block earned with a building still standing there unprayed");
  ("for.");
  ("The door is the pavement tile in front of a building's own doorway, and it is the whole");
  ("of what a building means to somebody living in it. Nobody goes inside - there is no");
  ("inside - so a home here is a doorstep, which is where a person stands when they are");
  ("outside their own house rather than out walking.");
  ("It is read OFF the building rather than worked out from the same sum a second time, so");
  ("the square somebody stands on is always the one directly below the door they stand at.");
  ("Two sums would agree today and disagree the day a building stops being an odd number of");
  ("tiles wide, and a doorstep beside the wrong door is a wrong address nothing would");
  ("report.");
  ("Buildings face SOUTH because the player is set down on the pavement looking north: the");
  ("fronts, the doors and the people standing at them are then all in view at once, and a");
  ("row seen from behind would be a wall.");
  ("The gaps between the buildings are named as ALLEYS and given back, so that whoever lays");
  ("the block down lays them too. Left out, they are whatever the world already had there -");
  ("and a world generated fresh each time puts a lake behind the row as readily as grass, so");
  ("the street would open every few games with water standing between the houses. They are");
  ("also the only way through the row, so paving them is what keeps the ground north of the");
  ("block reachable from the pavement in front of it.");
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let gap = property_get(shape, "gap");
  let sizes = bless_place_sizes();
  let count = property_get(sizes, "block");
  let stride = add(width, gap);
  let indexes = range(count);
  function building_x(index) {
    let across = multiply(index, stride);
    let at = add(x, across);
    return at;
  }
  function building_at(index) {
    let at = building_x(index);
    let building = bless_building(at, y);
    return building;
  }
  let buildings = list_map(indexes, building_at);
  function building_tiles(building) {
    let tiles = property_get(building, "tiles");
    return tiles;
  }
  let tiles_each = list_map(buildings, building_tiles);
  let walls = list_flat(tiles_each);
  let gaps = subtract(count, 1);
  let indexes_gap = range(gaps);
  function alley_tiles(index) {
    let at = building_x(index);
    let alley_x = add(at, width);
    let tiles = bless_tiles_rectangle(alley_x, y, gap, depth);
    return tiles;
  }
  let alleys_each = list_map(indexes_gap, alley_tiles);
  let alleys = list_flat(alleys_each);
  let sidewalk_y = add(y, depth);
  let fronts = multiply(count, stride);
  let block_width = subtract(fronts, gap);
  let sidewalk_depth = bless_sidewalk_depth();
  let sidewalk = bless_tiles_rectangle(x, sidewalk_y, block_width, sidewalk_depth);
  function door_at(building) {
    let doorway = property_get(building, "doorway");
    let at = property_get(doorway, "x");
    let door = {
      x: at,
      y: sidewalk_y,
    };
    return door;
  }
  let doors = list_map(buildings, door_at);
  let block = {
    buildings: buildings,
    walls: walls,
    alleys: alleys,
    sidewalk: sidewalk,
    doors: doors,
  };
  return block;
}
