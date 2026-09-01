import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { bless_household_people } from "./bless_household_people.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { range_map } from "./range_map.mjs";
export function bless_place_members(rung, place) {
  arguments_assert(arguments, 2);
  ("Everything one rung down that this place holds - the three families in a building, the");
  ("five buildings on a block.");
  ("It is arithmetic and not a search, because an address is made by dividing. A family's");
  ("building is its number divided by three, so the families in building one are simply");
  ("three, four and five - the same division read backwards. Nothing has to be looked at,");
  ("which is what lets the game ask about a county the player has never been to.");
  ("A FAMILY is the one place this does not hold, because families are two to five people");
  ("rather than always three, and it is asked of the one thing that knows how a building");
  ("shares its nine out. Everything above stays a multiplication, and the reason is that a");
  ("building is nine whichever way it splits - so the variety stops at this rung instead of");
  ("travelling up the ladder.");
  ("A person cannot be asked this, because nobody is inside a person. Asking anyway is a");
  ("caller that has walked off the bottom of the ladder, and the missing size says so.");
  let family = equal(rung, "household");
  if (family) {
    let people = bless_household_people(place);
    return people;
  }
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
