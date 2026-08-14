import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { list_filter } from "./list_filter.mjs";
import { number_is } from "./number_is.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function tally_most_or_null(tally) {
  "The largest number a tally counted, or nothing where it counted none.";
  "A tally's property names are exactly the values that turned up in it, so the largest of them is the largest value - no different from taking the largest of the list itself, and still there long after that list has been let go. They come back as text, because that is what a property name is, so they are read as numbers again here.";
  "Anything that does not read as a number is left out rather than compared, because a comparison against one answers neither yes nor no and would quietly swallow the largest number standing beside it.";
  arguments_assert(arguments, 1);
  let names = object_property_names(tally);
  let numbers = list_map(names, number_from_text);
  let real = list_filter(numbers, number_is);
  let most = list_max_or_null(real);
  return most;
}
