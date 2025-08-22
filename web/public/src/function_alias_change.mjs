import { not } from "./not.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { error } from "./error.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function function_alias_change(alias_old, alias_new) {
  function lambda(a) {
    let { exists, aliases, unaliased } = a;
    if (not(exists)) {
      error();
    }
    object_property_delete(aliases, alias_old);
    object_property_set(aliases, alias_new, unaliased);
  }
  await function_alias_generic(alias_old, lambda);
}
