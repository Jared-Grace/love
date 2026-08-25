import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { bless_cone_holds } from "./bless_cone_holds.mjs";
export function bless_person_hold_tile_allowed(person, tile) {
  arguments_assert(arguments, 2);
  ("Whether this person may step onto this square - yes always, unless somebody is holding");
  ("them in view, in which case only squares inside that view.");
  ("Being held is a thing that happens TO a person and is written on them, so the rule");
  ("travels with them and the walking code needs to know nothing about players or praying.");
  ("Nobody is held most of the time, and then this is simply yes.");
  ("It is the same shape as the rule that keeps a person near their own front door: a");
  ("square too far from home is refused before the directions are looked at, and a square");
  ("outside the view of whoever is holding them is refused the same way. So a held person");
  ("does not freeze, they PACE - they wander the squares still open to them, which is what");
  ("somebody waiting on a pavement looks like. Only when every way out is refused do they");
  ("stand still, and that is the same standing still as being boxed in by a crowd.");
  let cone = property_get_or_null(person, "hold_cone");
  if (not(cone)) {
    return true;
  }
  let x = property_get(tile, "x");
  let y = property_get(tile, "y");
  let allowed = bless_cone_holds(cone, x, y);
  return allowed;
}
