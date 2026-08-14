import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists } from "./property_exists.mjs";
export function g_coordinates_index_member_is(index) {
  "a test for whether a tile is one of the ones in an already-built index: made once, asked many times.";
  "it takes the INDEX rather than the tiles, for the caller that already holds one and would otherwise pay to build a second - the land index is built once for a whole map and asked of thousands of tiles.";
  function member_is(coordinates) {
    let key = g_coordinates_key(coordinates);
    let b = property_exists(index, key);
    return b;
  }
  return member_is;
}
