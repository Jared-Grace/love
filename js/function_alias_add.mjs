import { undefined_not_is_assert } from "../../../love/public/src/undefined_not_is_assert.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_sort_string_size } from "../../../love/public/src/list_sort_string_size.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export async function function_alias_add(first, second) {
  marker("1");
  let list = [first, second];
  list_sort_string_size(list);
  let [alias, f_name] = list;
  undefined_not_is_assert(f_name);
  function lambda(a) {
    let { exists, aliases, unaliased } = a;
    if (exists) {
      error(unaliased);
    }
    object_property_set(aliases, alias, f_name);
  }
  await function_alias_generic(alias, lambda);
}
