import { not } from "../../../love/public/src/not.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export async function function_alias_replace(alias_old, f_name) {
  function lambda(a) {
    let { exists, aliases } = a;
    if (not(exists)) {
      error();
    }
    object_property_delete(aliases, alias_old);
    object_property_set(aliases, alias_old, f_name);
  }
  await function_alias_generic(alias_old, lambda);
}
