import { arguments_assert } from "./arguments_assert.mjs";
import { list_all } from "./list_all.mjs";
import { property_get } from "./property_get.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
import { bless_person_tiles } from "./bless_person_tiles.mjs";
export function bless_cone_holds_person_wholly(cone, person) {
  arguments_assert(arguments, 2);
  ("Whether the cone holds ALL of this person - every square they are on, and somebody");
  ("mid-step is on two.");
  ("The strict twin of asking whether the cone holds them at all. That one errs toward");
  ("seeing, so a person with one foot over the edge counts as seen; this one errs the other");
  ("way, so the same person does not count. Both are wanted, for opposite jobs: what may be");
  ("prayed for is the generous question, and what the player has TAKEN IN is the strict one.");
  ("Somebody half in view at the instant the player stopped walking was not looked at, they");
  ("were glimpsed, and a glimpse should not follow the player round the corner.");
  function tile_held(tile) {
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let held = bless_cone_holds(cone, x, y);
    return held;
  }
  let tiles = bless_person_tiles(person);
  let wholly = list_all(tiles, tile_held);
  return wholly;
}
