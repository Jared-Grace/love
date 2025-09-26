import { each } from "./each.mjs";
import { undefined_not_is_assert } from "./undefined_not_is_assert.mjs";
import { marker } from "./marker.mjs";
import { list_sort_string_size } from "./list_sort_string_size.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { error } from "./error.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function function_alias_add(first, second) {
  marker("1");
  let list = [first, second];
  list_sort_string_size(list);
  let [alias, f_name] = list;
  each(list2, function lambda2(item) {});
  let v = undefined_not_is_assert(f_name);
  function lambda(a) {
    let { exists, aliases, unaliased } = a;
    if (exists) {
      error(unaliased);
    }
    object_property_set(aliases, alias, f_name);
  }
  await function_alias_generic(alias, lambda);
}
