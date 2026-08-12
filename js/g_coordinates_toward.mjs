import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function g_coordinates_toward(coordinates, direction) {
  "the next tile this way - one step east, west, south or north of where you are.";
  "The opposite question to the one that asks which way one tile is from another, and the two agree: going toward the way that was read off a pair of tiles arrives at the second of them.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let east = equal(direction, "east");
  if (east) {
    let tile_east = {
      x: add(x, 1),
      y,
    };
    return tile_east;
  }
  let west = equal(direction, "west");
  if (west) {
    let tile_west = {
      x: subtract(x, 1),
      y,
    };
    return tile_west;
  }
  let south = equal(direction, "south");
  if (south) {
    let tile_south = {
      x,
      y: add(y, 1),
    };
    return tile_south;
  }
  let tile_north = {
    x,
    y: subtract(y, 1),
  };
  return tile_north;
}
