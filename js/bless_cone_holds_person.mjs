import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
import { property_get } from "./property_get.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
import { bless_person_tiles } from "./bless_person_tiles.mjs";
export function bless_cone_holds_person(cone, person) {
  arguments_assert(arguments, 2);
  ("Whether the player can see this person - true if the cone holds EITHER square they are");
  ("on, so somebody halfway out of sight is still somebody in sight.");
  ("Asked of the square they are walking to only, a person stepping off the edge of the");
  ("cone left the player's sight at the instant their step began, while their picture was");
  ("still well inside it. They could be seen and not prayed for, which is the one thing");
  ("this game must never say - sight is what a prayer costs, so what is visible and what is");
  ("prayable have to be the same set or the price is being charged for the wrong thing.");
  ("It errs toward seeing, and that is the right way to err. A person the player can");
  ("half see is a person, and the cost has been paid for them; refusing them asks the");
  ("player to wait for a step to finish before their eyes count.");
  let tiles = bless_person_tiles(person);
  function tile_held(tile) {
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let held = bless_cone_holds(cone, x, y);
    return held;
  }
  let seen = list_any(tiles, tile_held);
  return seen;
}
