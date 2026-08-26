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
