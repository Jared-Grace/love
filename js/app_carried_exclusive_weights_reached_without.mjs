import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_pop } from "./list_pop.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
export function app_carried_exclusive_weights_reached_without(
  blocked,
  a_main,
  edges,
) {
  "$plain blocked";
  "$plain a_main";
  "$plain edges";
  "Every name one entry point still reaches once one named function is taken out of the graph and nothing else is changed.";
  "It is asked once for every name the bundle carries - eight hundred times over on a real page - so the import edges are gathered once by the caller and handed in rather than being read here. Reading them here would mean walking the disk eight hundred times to learn the same thing eight hundred times.";
  "A name whose imports are not in the record handed in is treated as the edge of the walk rather than as an error, because the record holds exactly what the bundle carries and a name outside it is by definition something the page never reached.";
  arguments_assert(arguments, 3);
  let seen = {};
  let unread = [a_main];
  while (list_empty_not_is(unread)) {
    let f_name = list_pop(unread);
    let skip = equal(f_name, blocked);
    if (skip) {
      continue;
    }
    let already = property_get_or_null(seen, f_name);
    if (already) {
      continue;
    }
    let imports = property_get_or_null(edges, f_name);
    let outside = null_is(imports);
    if (outside) {
      continue;
    }
    property_set(seen, f_name, true);
    for (let name of imports) {
      list_add(unread, name);
    }
  }
  return seen;
}
