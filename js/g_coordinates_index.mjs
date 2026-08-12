import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_set } from "./property_set.mjs";
export function g_coordinates_index(list) {
  "a list of tiles turned into a lookup, so asking whether a tile is one of them is a single question instead of a search through the whole list.";
  "Each tile is filed under the word for its place, and the tile itself is what is filed - so the answer to is this one of them and the answer to which one of them is it are the same lookup.";
  let index = {};
  for (let c of list) {
    let key = g_coordinates_key(c);
    property_set(index, key, c);
  }
  return index;
}
