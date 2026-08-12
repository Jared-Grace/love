import { g_path_steps } from "./g_path_steps.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { property_get } from "./property_get.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_npc_move } from "./app_g_npc_move.mjs";
export function app_g_crowd_push_shift(npc_index, route, delay) {
  "a run of people all shuffle one tile along the run they were given, and the tile at the head of it is left empty.";
  "The one furthest out goes first, into the free tile the run was built to reach, and each one after that steps into the tile just vacated by the one beyond them. Going in the other order would ask somebody to step onto a tile that is still occupied.";
  "They go one after another rather than all at once, each waiting a little longer than the one beyond them - the same wave a line of people walking behind the player moves in, where each of them steps into the space the one ahead has just left. Moving the whole run in one piece would look like a wall sliding; moving it as a wave shows WHY each of them moved, because the space they step into opens a moment before they take it.";
  "The run says where each of them goes, tile by tile, so it can turn a corner - the people in it are not all walking the same way, only all walking one step further along the same run.";
  "Where everybody is standing is kept up to date as they go, so a later run cannot be worked out against people who have already moved.";
  let steps = g_path_steps(route);
  let outward = list_copy_reverse(steps);
  function shift(step, index) {
    let from = property_get(step, "from");
    let to = property_get(step, "to");
    let key = g_coordinates_key(from);
    let npc = property_get(npc_index, key);
    let key_next = g_coordinates_key(to);
    property_delete_if_exists(npc_index, key);
    property_set(npc_index, key_next, npc);
    let wait = g_ripple_delay_seconds(index);
    let waited = add(delay, wait);
    app_g_npc_move(npc, to, waited);
  }
  each_index(outward, shift);
}
