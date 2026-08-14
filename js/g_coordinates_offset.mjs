import { g_coordinates_axes_generic } from "./g_coordinates_axes_generic.mjs";
import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { add } from "./add.mjs";
export function g_coordinates_offset(coordinates, offset) {
  "the tile a given number of steps east and south of another one.";
  "An arrangement of people is worth writing down once and standing anywhere, so it is written as how far each person is from the player rather than as where each person is - and this is what turns the one into the other.";
  "It answers with a PLACE and nothing else, and is asked with one too. A person and a tile of the map each carry more than where they are, so a coordinate built out of half of one would be matched against nobody.";
  let place = g_coordinates_tile(coordinates);
  let r = g_coordinates_axes_generic(place, offset, add);
  return r;
}
