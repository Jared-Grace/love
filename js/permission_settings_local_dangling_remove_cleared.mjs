import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { permission_settings_local_dangling_remove_dangling_is } from "./permission_settings_local_dangling_remove_dangling_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function permission_settings_local_dangling_remove_cleared(
  permissions,
) {
  arguments_assert(arguments, 1);
  let allow = property_get(permissions, "allow");
  let f_names = await functions_names();
  let aliases = await function_aliases();
  let removed = [];
  let kept = [];
  for (let rule of allow) {
    let dangling = permission_settings_local_dangling_remove_dangling_is(
      rule,
      f_names,
      aliases,
    );
    if (dangling) {
      list_add(removed, rule);
      continue;
    }
    list_add(kept, rule);
  }
  let cleared = list_empty_is(removed);
  let r = {
    f_names,
    aliases,
    removed,
    kept,
    cleared,
  };
  return r;
}
