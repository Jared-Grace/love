import { list_tally } from "./list_tally.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_all } from "./list_all.mjs";
export function list_tally_covers_is(list, list_needed) {
  "True when the first list holds every value of the second at least as many times as the second holds it. Extra values in the first are no objection.";
  "Counting is what separates this from asking whether each value turns up at all. Two of a value and one of it are different lists, and a check that only asked which values appeared would call them the same - which matters wherever a value can honestly repeat, such as a line of code with two brackets in it.";
  let have = list_tally(list);
  let needed = list_tally(list_needed);
  let names = object_property_names(needed);
  function enough_is(name) {
    let wanted = property_get(needed, name);
    let held = property_get_or(have, name, 0);
    let enough = less_than_equal(wanted, held);
    return enough;
  }
  let covers = list_all(names, enough_is);
  return covers;
}
