import { property_get } from "./property_get.mjs";
export function g_coordinates_tile(coordinates) {
  "just the place: a fresh pair of numbers saying which tile, and nothing else.";
  "A tile of the map is not only a place - it carries what is on it, and a step of a path carries the walk's own workings. Somebody is moved by assigning what they are given onto them, so handing either of those over whole writes all of that onto the person. Asked wherever a place has to be remembered or given away rather than shared.";
  let x = property_get(coordinates, "x");
  let y = property_get(coordinates, "y");
  let tile = {
    x,
    y,
  };
  return tile;
}
