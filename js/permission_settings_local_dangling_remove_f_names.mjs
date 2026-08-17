import { arguments_assert } from "./arguments_assert.mjs";
import { permission_settings_local_dangling_remove_cleared } from "./permission_settings_local_dangling_remove_cleared.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_settings_local_dangling_remove_f_names(
  permissions,
) {
  arguments_assert(arguments, 1);
  let r2 = await permission_settings_local_dangling_remove_cleared(permissions);
  let cleared = property_get(r2, "cleared");
  let kept = property_get(r2, "kept");
  let removed = property_get(r2, "removed");
  let aliases = property_get(r2, "aliases");
  let f_names = property_get(r2, "f_names");
  let r = {
    cleared,
    kept,
    removed,
    aliases,
    f_names,
  };
  return r;
}
