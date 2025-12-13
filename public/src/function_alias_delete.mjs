import { not } from "../../../love/public/src/not.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { error } from "../../../love/public/src/error.mjs";
export async function function_alias_delete(alias_old) {
  function lambda(a) {
    let { exists, aliases } = a;
    if (not(exists)) {
      error("alias does not exist");
    }
    object_property_delete(aliases, alias_old);
  }
  await function_alias_generic(alias_old, lambda);
}
