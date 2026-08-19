import { property_equals_not } from "./property_equals_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
export function bless_building(x, y) {
  arguments_assert(arguments, 2);
  ("One building, given as its three parts - the body behind, the front facing the street,");
  ("and the one square of that front which is its door.");
  ("The tile named is its north-west corner.");
  ("Three parts rather than one block of wall, because they are three different pictures.");
  ("A building drawn in a single material is a shed; a body, a front and a door is a house,");
  ("and the door is the part that says which house it is. That matters here more than it");
  ("would in most games: the prayer counts buildings, so a player who cannot tell one from");
  ("the next cannot see their own progress along the street.");
  ("The front is the LAST row, the one nearest the pavement, because that is the side the");
  ("player is looking at. Everything behind it is body - and a building only one deep is");
  ("all front and no body, which this answers correctly rather than refusing.");
  ("The door is in the middle of the front, and the face is the rest of that row. They are");
  ("given apart rather than as one row with a hole in it, so that each can be painted its");
  ("own material without anybody working out afterwards which square was which.");
  ("All of it is wall. There is no inside to any of this - a door is a place to stand");
  ("outside, not a way in - so `tiles` gives back every square of it for whoever needs to");
  ("know how much ground the building takes up.");
  let shape = bless_building_shape();
  let width = property_get(shape, "width");
  let depth = property_get(shape, "depth");
  let depth_body = subtract(depth, 1);
  let body = bless_tiles_rectangle(x, y, width, depth_body);
  let y_front = add(y, depth_body);
  let front = bless_tiles_rectangle(x, y_front, width, 1);
  let middle = divide_floor(width, 2);
  let x_door = add(x, middle);
  let doorway = {
    x: x_door,
    y: y_front,
  };
  function face_is(tile) {
    let beside = property_equals_not(tile, "x", x_door);
    return beside;
  }
  let face = list_filter(front, face_is);
  let built = list_concat(body, front);
  let building = {
    body: body,
    face: face,
    doorway: doorway,
    tiles: built,
  };
  return building;
}
