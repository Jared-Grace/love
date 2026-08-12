import { property_get } from "./property_get.mjs";
import { list_filter_object_includes } from "./list_filter_object_includes.mjs";
import { list_first_try } from "./list_first_try.mjs";
export function g_coordinates_npc_standing(g, coordinates) {
  "the person standing on a tile, or nothing when it is empty.";
  "One character to a tile is the rule the whole map keeps, so there is never more than one answer to this. Asked before the player steps somewhere, because somebody being there is not a reason to refuse the step - it is a reason for the two of them to step past each other.";
  "The question is asked of the place alone, never of the tile as it was handed in. Matching an object asks the candidate to carry everything the question carries, and a tile of the map carries what is standing on it while a step of a path carries the walk's workings - a person carries neither, so asking with either one whole answers nobody every time, silently, wherever they are standing.";
  let npcs = property_get(g, "npcs");
  let place = g_coordinates_tile(coordinates);
  let matched = list_filter_object_includes(npcs, place);
  let npc = list_first_try(matched);
  return npc;
}
