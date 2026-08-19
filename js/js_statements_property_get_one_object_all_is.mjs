import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_statement_property_get_object_name_try } from "./js_statement_property_get_object_name_try.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
export function js_statements_property_get_one_object_all_is(statements) {
  "Whether a run of statements is nothing but one thing being taken apart - every line of it lifting a named piece out of the same named thing.";
  "A run like this is worthless to a reading that groups code by its shape, and the reason is that there is no way to act on it. Giving the run its own name means writing something that hands back a bundle holding exactly the pieces the run just lifted out, and every caller then takes that bundle apart again. The lines come back, and one more thing exists.";
  "Two functions doing this are almost always two halves of one function that was cut in two, where the first half bundled up what the second half needs. So what is found here is the cut itself, reported back as though somebody had written the same thing twice.";
  "One thing rather than any thing: four pieces lifted out of four different places is four separate readings that happen to be spelt alike, and there is nothing about it that says the two functions are doing anything in common.";
  arguments_assert(arguments, 1);
  let names = list_map(statements, js_statement_property_get_object_name_try);
  let first = list_first(names);
  let none = null_is(first);
  if (none) {
    return false;
  }
  function same_is(name) {
    let same = equal(name, first);
    return same;
  }
  let all_same = list_all_is(names, same_is);
  return all_same;
}
