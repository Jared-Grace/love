import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_toward } from "./g_coordinates_toward.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
export function app_g_crowd_push_shift(npc_index, chain, side, delay) {
  "a run of people all shuffle one tile the same way, and the tile at the head of the run is left empty.";
  "The one furthest out goes first, into the free tile the run was built to reach, and each one after that steps into the tile just vacated by the one beyond them. Going in the other order would ask somebody to step onto a tile that is still occupied.";
  "Where everybody is standing is kept up to date as they go, so a later run cannot be worked out against people who have already moved.";
  let outward = list_copy_reverse(chain);
  for (let tile of outward) {
    let key = g_coordinates_key(tile);
    let npc = property_get(npc_index, key);
    let next = g_coordinates_toward(tile, side);
    let key_next = g_coordinates_key(next);
    property_delete_if_exists(npc_index, key);
    property_set(npc_index, key_next, npc);
    app_g_npc_move(npc, next, delay);
  }
}
