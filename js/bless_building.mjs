import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { add } from "./add.mjs";
import { modulo } from "./modulo.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_concat } from "./list_concat.mjs";
export function bless_building(x, y) {
  arguments_assert(arguments, 2);
  ("One building, given as its three parts - the roof seen from above, the front wall it");
  ("stands behind, and the doors let into that wall, one for every family living in it.");
  ("The tile named is its north-west corner.");
  ("A door for each family rather than one for the whole building, and that is the point of");
  ("this shape. The prayer works upwards through families to buildings to streets, and a");
  ("player who never sees that structure is praying one person at a time forever. Doors in a");
  ("row is the structure drawn on the street itself: this is one building, and this many");
  ("homes live behind it. Nothing has to be said in words, and nothing has to be opened to");
  ("be read - it is on the map the whole time.");
  ("Every door has a square of wall on BOTH sides of it, the two on the ends included, so a");
  ("door is a hole in a wall rather than a corner of the building. A door hard against the");
  ("alley reads as the gap between two houses widening, not as a way into this one, and the");
  ("player counting homes counts it as part of the street.");
  ("Doors sit on the ODD squares across, so the first and last squares are wall and every");
  ("door has a wall square on each side. That is why the width is odd - an even width would");
  ("put a door in a corner, and the test here would go on saying it was fine.");
  ("The roof is the rows BEHIND the front, and it is given separately because it is not");
  ("drawn in the same material as the wall. Seen from above a building is a roof with one");
  ("wall showing, and painting both the same makes the whole thing read as flat ground of");
  ("an odd colour rather than as something standing up. The wall is the part the player");
  ("walks past and the part the doors are cut into, so the wall is what wears the");
  ("building's own material and the roof is common to all of them.");
  ("The front is the LAST row, the one nearest the pavement, because that is the side the");
  ("player is looking at.");
  ("All of it is solid. There is no inside to any of this - a door is a place to stand");
  ("outside, not a way in - so `tiles` gives back every square of it for whoever needs to");
  ("know how much ground the building takes up.");
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let stride = property_get(shape, "door_stride");
  let depth_roof = subtract(depth, 1);
  let roof = bless_tiles_rectangle(x, y, width, depth_roof);
  let y_front = add(y, depth_roof);
  let front = bless_tiles_rectangle(x, y_front, width, 1);
  function door_is(tile) {
    let tile_x = property_get(tile, "x");
    let across = subtract(tile_x, x);
    let inset = subtract(across, 1);
    let between = modulo(inset, stride);
    let opening = not(between);
    return opening;
  }
  let doorways = list_filter(front, door_is);
  let walls = list_filter_not(front, door_is);
  let solid = list_concat(roof, walls);
  let built = list_concat(solid, doorways);
  let building = {
    roof: roof,
    walls: walls,
    doorways: doorways,
    tiles: built,
  };
  return building;
}
