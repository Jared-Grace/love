import { arguments_assert } from "./arguments_assert.mjs";
import { modulo } from "./modulo.mjs";
import { property_get } from "./property_get.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
export function bless_place_within(rung, place) {
  arguments_assert(arguments, 2);
  ("Where this place sits inside the one that holds it - the fourth building on its block");
  ("rather than the nineteenth building in the world.");
  ("An address counts from the beginning of everything, because it is made by dividing one");
  ("long line of people up. That is the right number to pray over and the wrong number to");
  ("look somebody up by: a block is built with five doors in it and knows nothing of the");
  ("blocks laid down before it, so building nineteen would be asked for at a door that");
  ("does not exist.");
  ("The remainder of the same division that made the address is what turns one into the");
  ("other, so this cannot drift from the way addresses are handed out.");
  let sizes = bless_place_sizes();
  let holds = bless_rung_after(rung);
  let size = property_get(sizes, holds);
  let within = modulo(place, size);
  return within;
}
