import { assert_message } from "../../../love/public/src/assert_message.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_is_assert_multiple } from "../../../love/public/src/text_is_assert_multiple.mjs";
import { function_alias_generic } from "../../../love/public/src/function_alias_generic.mjs";
import { property_delete } from "../../../love/public/src/property_delete.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export async function function_alias_replace(alias_old, f_name) {
  const items = [alias_old, f_name];
  text_is_assert_multiple(items);
  function lambda(a) {
    let aliases = property_get(a, "aliases");
    let exists = property_get(a, "exists");
    assert_message(exists, "alias no exist");
    property_delete(aliases, alias_old);
    property_set(aliases, alias_old, f_name);
  }
  await function_alias_generic(alias_old, lambda);
}
