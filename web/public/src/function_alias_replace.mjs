import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { text_is_assert_multiple } from "../../../love/public/src/text_is_assert_multiple.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { object_property_delete } from "../../../love/public/src/object_property_delete.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export async function function_alias_replace(alias_old, f_name) {
  const items = [alias_old, f_name];
  text_is_assert_multiple(items);
  function lambda(a) {
    let aliases = object_property_get(a, "aliases");
    let exists = object_property_get(a, "exists");atm
    if (not(exists)) {
      error("alias no exist");
    }
    object_property_delete(aliases, alias_old);
    object_property_set(aliases, alias_old, f_name);
  }
  await function_alias_generic(alias_old, lambda);
}
