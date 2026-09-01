import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { bless_household_people } from "./bless_household_people.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { bless_building_families } from "./bless_building_families.mjs";
import { range_map } from "./range_map.mjs";
export function bless_place_members(rung, place) {
  arguments_assert(arguments, 2);
  ("Everything one rung down that this place holds - the families in a building, the five buildings on a block.");
  ("It is arithmetic and not a search, because an address is made by dividing. A building's blocks are simply its number divided by five read backwards. Nothing has to be looked at, which is what lets the game ask about a county the player has never been to.");
  ("A FAMILY is the one place this does not hold, because families are two to five people rather than always three, and it is asked of the one thing that knows how a building shares its nine out.");
  ("A BUILDING is the one place where how many there are and how far apart they are numbered come apart. Every building is given four family numbers because four is the most doors any of them has, and a building with two doors uses two of them and leaves the rest unused. So the first family is still the building's number times four - the same reading that finds a family's building - while how many to hand back is asked of the street.");
  ("Handing back all four would be handing back two families that nobody lives in, and every reading above this one asks whether all of a building's families are finished. Two of them permanently unfinished is a building that can never be prayed for.");
  ("Everything above stays a plain multiplication, and the reason is that a building holds nine whichever way it splits - so the variety stops at this rung instead of travelling up the ladder.");
  ("A person cannot be asked this, because nobody is inside a person. Asking anyway is a caller that has walked off the bottom of the ladder, and the missing size says so.");
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
  let house = equal(rung, "building");
  if (house) {
    let doors = bless_building_families(place);
    let families = range_map(doors, member);
    return families;
  }
  let members = range_map(size, member);
  return members;
}
