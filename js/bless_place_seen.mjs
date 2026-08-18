import { arguments_assert } from "./arguments_assert.mjs";
import { list_all } from "./list_all.mjs";
import { property_get } from "./property_get.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
export function bless_place_seen(cone, tiles) {
  arguments_assert(arguments, 2);
  ("Whether a whole place is in sight - every one of the tiles it covers held by the cone.");
  ("EVERY one, never most. The prayer says everyone on this street, and a street with a");
  ("corner out of view is not the street the player would be praying for. That is what makes");
  ("a place rung cost something rather than being handed over for standing near it.");
  ("The same question answers for a street, a block and a city, because a place here is only");
  ("its tiles - so climbing the ladder needs bigger tile lists and no new rule.");
  ("Sight is still the cost, exactly as it is for a count rung. This asks the same cone the");
  ("people are counted through, so a place cannot be blessed by a player who could not have");
  ("seen the people standing on it.");
  function lambda$tile(tile) {
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let held = bless_cone_holds(cone, x, y);
    return held;
  }
  let seen = list_all(tiles, lambda$tile);
  return seen;
}
