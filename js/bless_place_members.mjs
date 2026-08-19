import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { range_map } from "./range_map.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
export function bless_place_members(rung, place) {
  arguments_assert(arguments, 2);
  ("Everything one rung down that this place holds - the four households in a building, the");
  ("five buildings on a block.");
  ("It is arithmetic and not a search, because an address is made by dividing. A person's");
  ("building is their household divided by four, so the households in building one are");
  ("simply four, five, six and seven - the same division read backwards. Nothing has to be");
  ("looked at, which is what lets the game ask about a county the player has never been to.");
  ("A person cannot be asked this, because nobody is inside a person. Asking anyway is a");
  ("caller that has walked off the bottom of the ladder, and the missing size says so.");
  let sizes = bless_place_sizes();
  let size = property_get(sizes, rung);
  let first = multiply(place, size);
  function member(offset) {
    let id = add(first, offset);
    return id;
  }
  let members = range_map(size, member);
  return members;
}
