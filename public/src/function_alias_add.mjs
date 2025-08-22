import { list_sort_string_size } from "./list_sort_string_size.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { error } from "./error.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function function_alias_add(first, second) {
  let list = [first, second];
  list_sort_string_size(list);
  let [alias, f_name] = list;
  function lambda(a) {
    let { exists, aliases, unaliased } = a;
    if (exists) {
      error(unaliased);
    }
    object_property_set(aliases, alias, f_name);
  }
  await function_alias_generic(alias, lambda);
}
