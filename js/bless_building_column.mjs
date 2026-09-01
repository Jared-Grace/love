import { bless_building_shape } from "./bless_building_shape.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_min } from "./list_min.mjs";
import { add } from "./add.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
export function bless_building_column(building, index) {
  arguments_assert(arguments, 2);
  ("One household's share of a building, given as the ground it covers - a strip one tile");
  ("wide running from the front of the house to the back of it.");
  ("A building puts one door on the street for each household living in it, so the strips");
  ("fall out of the picture instead of having to be invented - a household owns the ground");
  ("standing behind its own door. The doors are spaced, so the strip is found by stepping");
  ("along the front the same distance the doors are apart rather than one square at a time,");
  ("and the squares of wall in between belong to no household in particular.");
  ("A COLUMN rather than a single square, because a lit column reads as a part of the house");
  ("and a lit square reads as a mark hung on its wall. The player is being told how much of");
  ("this house is done, and a third of a house is a third of the shape of it.");
  ("The westmost square is measured off the building rather than handed in, so this needs to");
  ("know nothing about where the building stands or which way the street runs.");
  let tiles = property_get(building, "tiles");
  function tile_x(tile) {
    let x = property_get(tile, "x");
    return x;
  }
  let xs = list_map(tiles, tile_x);
  let x_west = list_min(xs);
  let shape = bless_building_shape();
  let stride = property_get(shape, "door_stride");
  let across = multiply(index, stride);
  let x_column = add(x_west, across);
  function tile_in_column(tile) {
    let within = property_equals(tile, "x", x_column);
    return within;
  }
  let column = list_filter(tiles, tile_in_column);
  return column;
}
