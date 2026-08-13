import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { g_coordinates_offset } from "./g_coordinates_offset.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function g_npc_path_clear_tiles(situation, player, land_index) {
  "where every person in one of these arrangements has to stand, worked out for where the player is now.";
  "HEMMED is added here rather than written into each arrangement, because it is the same four tiles every time and it is the reason most of them work at all - the four beside the player, which is the whole of what a way round is on an open map.";
  "Water is dropped rather than moved to dry land. A person cannot stand on it, and a person is only there to be a wall - so water in the arrangement is a wall already, and the arrangement is right without it.";
  let place = g_coordinates_tile(player);
  let offsets = property_get(situation, "people");
  function tile_of(offset) {
    let tile = g_coordinates_offset(place, offset);
    return tile;
  }
  let asked = list_map(offsets, tile_of);
  let hemmed = property_get(situation, "hemmed");
  if (hemmed) {
    let beside = g_coordinates_orthogonal(place);
    list_add_multiple(asked, beside);
  }
  function land_is(tile) {
    let key = g_coordinates_key(tile);
    let b = property_exists(land_index, key);
    return b;
  }
  let r = list_filter(asked, land_is);
  return r;
}
