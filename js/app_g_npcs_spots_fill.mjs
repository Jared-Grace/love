import { app_shared_game_npc_move } from "./app_shared_game_npc_move.mjs";
import { g_coordinates_member_is } from "./g_coordinates_member_is.mjs";
import { g_coordinates_distance_squared } from "./g_coordinates_distance_squared.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_size } from "./list_size.mjs";
import { each_index } from "./each_index.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function app_g_npcs_spots_fill(npcs, wanted, player) {
  "stand people on the tiles an arrangement asks for, and say how many were filled.";
  "NEARNESS is what makes it look like a place rather than a stage. The spots are filled by the people standing nearest the player, so whoever arrives was nearly there anyway and the rest of the map is left as it was.";
  "Whoever is ALREADY standing where they are wanted is left alone rather than moved, and the spots they hold are not offered to anybody else. Two people may never be sent to one tile: a person's picture and the cross over them are remembered by where that person is standing, so a second person arriving on a tile takes over the first one's drawer, and the first one afterwards drags somebody else's picture about.";
  let wanted_is = g_coordinates_member_is(wanted);
  let staying = list_filter(npcs, wanted_is);
  let staying_is = g_coordinates_member_is(staying);
  let to_fill = list_filter_not(wanted, staying_is);
  let moving = list_filter_not(npcs, wanted_is);
  function nearness(npc) {
    let d = g_coordinates_distance_squared(npc, player);
    return d;
  }
  list_sort_number_mapper(moving, nearness);
  function fill(tile, index) {
    let npc = moving[index];
    let none = undefined_is(npc);
    if (none) {
      ("fewer people on the map than the arrangement asks for - stand the ones there are and leave it short, because a shape missing somebody still shows most of what it is for");
      return;
    }
    app_shared_game_npc_move(npc, tile, 0);
  }
  each_index(to_fill, fill);
  let filled = list_size(to_fill);
  return filled;
}
