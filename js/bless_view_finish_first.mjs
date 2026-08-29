import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bless_place_sizes } from "./bless_place_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { bless_blessed_is } from "./bless_blessed_is.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_first } from "./list_first.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_view_finish_first(blessed, remaining) {
  arguments_assert(arguments, 2);
  ("Of everybody left in a house the player has started, just the ones in the house that");
  ("should be finished next - so the arrow aims at one door rather than at whichever of ten");
  ("half-done houses the player happens to be standing nearest to.");
  ("A player who prays wherever they are opens houses far faster than they close them.");
  ("Every prayer starts a new household, none of them fills up, and the rung above stays");
  ("out of reach while the street fills with rings. The arrow was making that worse rather");
  ("than better: it pointed at the NEAREST person left anywhere, so walking a few steps");
  ("changed its mind and sent the player to a different house each time.");
  ("Fewest left first. A house with one person to go is one prayer from earning a rung, and");
  ("a house with two is two - so finishing the nearly-done one is strictly the faster route");
  ("to the same place, whichever house the player is standing in front of.");
  ("Then, between houses equally far along, the one in the building that is furthest along.");
  ("That is what finishes a BUILDING before another is opened, and it is the same argument");
  ("one rung up: three finished households earn the building, and three houses each a third");
  ("done earn nothing at all.");
  ("The second question is asked as a FRACTION of a house rather than as a number of its");
  ("own, so it can only ever decide a tie. Added as a plain count it would outweigh the");
  ("first question - a building with two houses done would beat a house with one person");
  ("left in it - which is the deeper rung overruling the shallower one and gets the answer");
  ("backwards.");
  ("The list is copied before it is put in order, because it belongs to the caller. Sorted");
  ("where it lies, everything else reading it - who is ringed, who is drawn first - would");
  ("quietly change order with it.");
  ("Only ONE house comes back, and the rings are deliberately not narrowed the same way.");
  ("A ring is a fact about somebody the player has already prayed beside and it stays true;");
  ("the arrow is advice, and advice that names ten places at once is not advice.");
  ("An empty answer is handed straight back rather than being worked out. At the first move");
  ("of a new game nobody has started a house, and there is no house to be nearest to");
  ("finishing.");
  let people = bless_view_people(remaining);
  let none = list_empty_is(people);
  if (none) {
    return remaining;
  }
  let sizes = bless_place_sizes();
  let per_building = property_get(sizes, "building");
  let spread = add(per_building, 1);
  function person_household(person) {
    let household = bless_person_place(person, "household");
    return household;
  }
  function person_score(person) {
    let household = person_household(person);
    function person_same(other) {
      let household_other = person_household(other);
      let together = equal(household_other, household);
      return together;
    }
    let housemates = list_filter(people, person_same);
    let left_count = list_size(housemates);
    let building = bless_person_place(person, "building");
    let households = bless_place_members("building", building);
    function household_done_is(id) {
      let done = bless_blessed_is(blessed, "household", id);
      return done;
    }
    let finished = list_filter(households, household_done_is);
    let done_count = list_size(finished);
    let nearer = divide(done_count, spread);
    let score = subtract(left_count, nearer);
    return score;
  }
  let order = list_copy(people);
  list_sort_number_mapper(order, person_score);
  let best = list_first(order);
  let household_best = person_household(best);
  function person_chosen_is(person) {
    let household = person_household(person);
    let chosen = equal(household, household_best);
    return chosen;
  }
  let next = list_filter(people, person_chosen_is);
  let view = bless_view_of_people(next);
  return view;
}
