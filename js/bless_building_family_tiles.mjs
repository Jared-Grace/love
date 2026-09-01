import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
export function bless_building_family_tiles(building, index) {
  arguments_assert(arguments, 2);
  ("One household's share of a building, given as the ground it covers - a strip one tile");
  ("wide running from the front of the house to the back of it.");
  ("A building puts one door on the street for each household living in it, so the strips");
  ("fall out of the picture instead of having to be invented - a household owns the ground");
  ("standing behind its own door.");
  ("The strip is found by ASKING the building which square its door is on, rather than by");
  ("counting squares along the front. The doors are spaced, and there is wall at each end");
  ("besides, so any sum done here would have to know both of those numbers and would go");
  ("quietly wrong the next time either changed - the columns would still be drawn, just one");
  ("square off the doors they are supposed to belong to. The building already knows where");
  ("it put its doors, so ask it.");
  ("A COLUMN rather than a single square, because a lit column reads as a part of the house");
  ("and a lit square reads as a mark hung on its wall. The player is being told how much of");
  ("this house is done, and a third of a house is a third of the shape of it.");
  let tiles = property_get(building, "tiles");
  let doorways = property_get(building, "doorways");
  let door = list_get(doorways, index);
  let x_column = property_get(door, "x");
  function tile_in_column(tile) {
    let within = property_equals(tile, "x", x_column);
    return within;
  }
  let column = list_filter(tiles, tile_in_column);
  return column;
}
