import { not } from "./not.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { error } from "./error.mjs";
export async function function_alias_delete(alias_old) {
  function lambda(a) {
    let { exists, aliases } = a;
    if (not(exists)) {
      error();
    }
    object_property_delete(aliases, alias_old);
  }
  await function_alias_generic(alias_old, lambda);
}
