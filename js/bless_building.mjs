import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { add } from "./add.mjs";
import { list_concat } from "./list_concat.mjs";
export function bless_building(x, y) {
  arguments_assert(arguments, 2);
  ("One building, given as its two parts - the wall standing behind, and the row of doors");
  ("along its front, one door for every family living in it.");
  ("The tile named is its north-west corner.");
  ("A door for each family rather than one for the whole building, and that is the point of");
  ("this shape. The prayer works upwards through families to buildings to streets, and a");
  ("player who never sees that structure is praying one person at a time forever. Three");
  ("doors in a row is the structure drawn on the street itself: this is one building, and");
  ("three homes live behind it. Nothing has to be said in words, and nothing has to be");
  ("opened to be read - it is on the map the whole time.");
  ("The front row is exactly as wide as the building holds families, which is the same");
  ("standing assumption a household's column of ground already rests on. If a building ever");
  ("holds a number of families that is not its width, this is a second place to change");
  ("rather than leave drawing something untrue.");
  ("The front is the LAST row, the one nearest the pavement, because that is the side the");
  ("player is looking at. Everything behind it is wall - and a building only one deep is all");
  ("front and no wall, which this answers correctly rather than refusing.");
  ("The doors used to be one square in the middle with the building's own material to either");
  ("side of it, so a building wore its material on the front and hid its darkness behind.");
  ("There is no room on a front for both three doors and a stretch of wall, so the material");
  ("moved back a row: the building is still the only one on the street wearing it, and the");
  ("row a player actually walks past is now the row that says how many homes are here.");
  ("All of it is wall. There is no inside to any of this - a door is a place to stand");
  ("outside, not a way in - so `tiles` gives back every square of it for whoever needs to");
  ("know how much ground the building takes up.");
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let depth_body = subtract(depth, 1);
  let body = bless_tiles_rectangle(x, y, width, depth_body);
  let y_front = add(y, depth_body);
  let doorways = bless_tiles_rectangle(x, y_front, width, 1);
  let built = list_concat(body, doorways);
  let building = {
    body: body,
    doorways: doorways,
    tiles: built,
  };
  return building;
}
