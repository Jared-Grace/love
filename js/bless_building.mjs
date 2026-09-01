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
  ("One building, given as its two parts - the wall it is built of, and the doors standing");
  ("along its front, one door for every family living in it.");
  ("The tile named is its north-west corner.");
  ("A door for each family rather than one for the whole building, and that is the point of");
  ("this shape. The prayer works upwards through families to buildings to streets, and a");
  ("player who never sees that structure is praying one person at a time forever. Doors in a");
  ("row is the structure drawn on the street itself: this is one building, and this many");
  ("homes live behind it. Nothing has to be said in words, and nothing has to be opened to");
  ("be read - it is on the map the whole time.");
  ("The doors stand every other square along the front, with the building's own material in");
  ("between them and at both ends. Side by side they read as one wide opening; spaced, they");
  ("read as separate homes and can be counted. The front row is as wide as the shape says,");
  ("and the shape works that width out from how many families live here, so the doors and");
  ("the wall between them always come out even.");
  ("The front is the LAST row, the one nearest the pavement, because that is the side the");
  ("player is looking at. Everything behind it is wall - and a building only one deep is all");
  ("front and no wall, which this answers correctly rather than refusing.");
  ("All of it is wall. There is no inside to any of this - a door is a place to stand");
  ("outside, not a way in - so `tiles` gives back every square of it for whoever needs to");
  ("know how much ground the building takes up.");
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let stride = property_get(shape, "door_stride");
  let depth_body = subtract(depth, 1);
  let body = bless_tiles_rectangle(x, y, width, depth_body);
  let y_front = add(y, depth_body);
  let front = bless_tiles_rectangle(x, y_front, width, 1);
  function door_is(tile) {
    let tile_x = property_get(tile, "x");
    let across = subtract(tile_x, x);
    let over = modulo(across, stride);
    let opening = not(over);
    return opening;
  }
  let doorways = list_filter(front, door_is);
  let panels = list_filter_not(front, door_is);
  let walls = list_concat(body, panels);
  let built = list_concat(walls, doorways);
  let building = {
    body: walls,
    doorways: doorways,
    tiles: built,
  };
  return building;
}
