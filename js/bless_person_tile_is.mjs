import { arguments_assert } from "./arguments_assert.mjs";
import { and } from "./and.mjs";
import { equal } from "./equal.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
import { bless_person_tiles } from "./bless_person_tiles.mjs";
export function bless_person_tile_is(person, x, y) {
  arguments_assert(arguments, 3);
  ("Whether this person is on that square - counting the square they are still crossing off");
  ("as well as the one they are standing on.");
  ("A player taps where they SEE somebody, and mid-step that is either of two squares. Asked");
  ("of one square only, a tap on a walking person found nobody and walked the player toward");
  ("them instead - so the person carried on walking, the player followed, and praying for");
  ("anybody on the move turned into a chase.");
  let tiles = bless_person_tiles(person);
  function tile_is(tile) {
    let tile_x = property_get(tile, "x");
    let tile_y = property_get(tile, "y");
    let across = equal(tile_x, x);
    let down = equal(tile_y, y);
    let here = and(across, down);
    return here;
  }
  let on = list_any(tiles, tile_is);
  return on;
}
