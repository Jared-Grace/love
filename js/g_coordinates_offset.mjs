import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function g_coordinates_offset(coordinates, offset) {
  "the tile a given number of steps east and south of another one.";
  "An arrangement of people is worth writing down once and standing anywhere, so it is written as how far each person is from the player rather than as where each person is - and this is what turns the one into the other.";
  "It answers with a PLACE and nothing else, and is asked with one too. A person and a tile of the map each carry more than where they are, so a coordinate built out of half of one would be matched against nobody.";
  let place = g_coordinates_tile(coordinates);
  let x = property_get(place, "x");
  let y = property_get(place, "y");
  let x_offset = property_get(offset, "x");
  let y_offset = property_get(offset, "y");
  let x2 = add(x, x_offset);
  let y2 = add(y, y_offset);
  let r = {
    x: x2,
    y: y2,
  };
  return r;
}
