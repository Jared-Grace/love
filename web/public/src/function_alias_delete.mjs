import { function_alias_generic } from "./function_alias_generic.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { error } from "./error.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function function_alias_delete(alias_old) {
  await function_alias_generic(alias_old, function lambda(a) {
    let { exists, aliases } = a;
    if (!exists) {
      error();
    }
    object_property_delete(aliases, alias_old);
  });
}
