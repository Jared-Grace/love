import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { assert_message } from "./assert_message.mjs";
import { property_get } from "./property_get.mjs";
import { text_is_assert_multiple } from "./text_is_assert_multiple.mjs";
import { function_alias_generic } from "./function_alias_generic.mjs";
import { property_set } from "./property_set.mjs";
export async function function_alias_replace(alias_old, f_name) {
  let items = [alias_old, f_name];
  text_is_assert_multiple(items);
  f_name = await function_name_unalias_only(f_name);
  function lambda(a) {
    let aliases = property_get(a, "aliases");
    let exists = property_get(a, "exists");
    assert_message(exists, "alias no exist");
    property_set(aliases, alias_old, f_name);
  }
  await function_alias_generic(alias_old, lambda);
}
