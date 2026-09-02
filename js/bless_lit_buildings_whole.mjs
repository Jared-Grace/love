import { arguments_assert } from "./arguments_assert.mjs";
import { g_coordinates_member_is } from "./g_coordinates_member_is.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get } from "./list_get.mjs";
import { bless_place_done_is } from "./bless_place_done_is.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function bless_lit_buildings_whole(blessed, blocks, lit) {
  arguments_assert(arguments, 3);
  ("Ground that has just been lit, widened to the WHOLE of any building that the same prayer");
  ("finished - so a house that is now done flashes as a house rather than as whichever part");
  ("of it happened to be the last part.");
  ("What a celebration is handed is the DIFFERENCE between the street before a prayer and the");
  ("street after it, which is right for deciding whether anything happened and wrong for");
  ("deciding what to show. Every family in a building owns a share of its front, and the");
  ("shares divide it exactly - so by the time the last family is prayed for, the rest of the");
  ("house is already alight and the difference the building itself makes is nothing at all.");
  ("The prayer that finishes a building therefore arrives with one slab to flash, and a player");
  ("who finished a two storey house from the ground floor watched its bottom row turn white");
  ("and reported it as the glow missing the upstairs.");
  ("The house was not wrong on the street afterwards - all of it stays lit, because the whole");
  ("of a finished building is what is drawn. It was the CELEBRATION that was reading the wrong");
  ("list: the moment a house is finished is the one moment the house should be shown whole,");
  ("and it was the one moment showing least.");
  ("A building is widened only when it is FINISHED. Half a house lighting up whole would be");
  ("the celebration saying something the street then contradicts a second later, and the part");
  ("shares exist exactly so that a house can be two thirds done and look it.");
  ("It is asked of the buildings the new ground TOUCHES and not of every building that is");
  ("done, because most of them were finished long ago and are not what just happened. A");
  ("prayer at the rung above finishes several at once and each of them is touched, so this");
  ("widens all of them without being told how many to expect.");
  ("Every tile comes back exactly ONCE. These lights are see-through and a square painted");
  ("twice comes out the wrong colour, so a building hands over either the whole of itself or");
  ("the new part of itself, never both - and no two buildings share a square.");
  ("Ground outside a building cannot be lit at all, so nothing needs carrying over from the");
  ("list this was given. Lighting is worked out building by building, and the only yard in");
  ("it is the step of it in front of a door, which the building counts as its own.");
  let member_is = g_coordinates_member_is(lit);
  function block_tiles(block, index) {
    let buildings = property_get(block, "buildings");
    let numbers = bless_place_members("block", index);
    function building_tiles(building, at) {
      let ground_all = property_get(building, "ground");
      let inside = list_filter(ground_all, member_is);
      let none = list_empty_is(inside);
      if (none) {
        let empty = [];
        return empty;
      }
      let number = list_get(numbers, at);
      let whole = bless_place_done_is(blessed, "building", number);
      if (whole) {
        return ground_all;
      }
      return inside;
    }
    let per_building = list_map_index(buildings, building_tiles);
    let tiles_here = list_concat_multiple(per_building);
    return tiles_here;
  }
  let per_block = list_map_index(blocks, block_tiles);
  let tiles = list_concat_multiple(per_block);
  return tiles;
}
