import { g_coordinates_tile } from "./g_coordinates_tile.mjs";
import { g_coordinates_orthogonal } from "./g_coordinates_orthogonal.mjs";
import { g_coordinates_index } from "./g_coordinates_index.mjs";
import { g_coordinates_index_member_is } from "./g_coordinates_index_member_is.mjs";
import { g_npc_path_clear_facing_best } from "./g_npc_path_clear_facing_best.mjs";
import { object_values } from "./object_values.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
export function g_npc_path_clear_places(situation, player, land_index) {
  "where everybody stands and which tile to tap, worked out for where the player is now: the arrangement pointed whichever of the four ways there is most dry land for.";
  "which way to point it is asked elsewhere and arrives already decided, so what is left here is the two things added on top of a turned arrangement and the two things dropped out of it.";
  "HEMMED is added after the turning rather than before, because it is the four tiles beside the player and those are the same four whichever way the arrangement points.";
  "Water is dropped rather than moved to dry land. Nobody can stand on it, and these people are only there to be a wall - so water in the arrangement is a wall already, and the arrangement is right without it.";
  let place = g_coordinates_tile(player);
  let land_is = g_coordinates_index_member_is(land_index);
  let best = g_npc_path_clear_facing_best(situation, place, land_is);
  let asked = property_get(best, "people");
  let tap = property_get(best, "tap");
  let wanted = [];
  list_add_multiple(wanted, asked);
  let hemmed = property_get(situation, "hemmed");
  if (hemmed) {
    let beside = g_coordinates_orthogonal(place);
    list_add_multiple(wanted, beside);
  }
  let tapped = property_get(situation, "tapped");
  if (tapped) {
    ("the tap lands on a PERSON, so that person has to be one of the people standing - the arrangement names their tile twice and the next line makes it one");
    list_add(wanted, tap);
  }
  let dry = list_filter(wanted, land_is);
  ("one tile named twice is asked for once. What it guards against is not a duplicate person: a person's picture and the cross over them are remembered by where they are standing, so a second person arriving on a tile takes over the first one's drawer and the first drags somebody else's picture about from then on");
  let index = g_coordinates_index(dry);
  let people = dry;
  let r = {
    people,
    tap,
  };
  return r;
}
