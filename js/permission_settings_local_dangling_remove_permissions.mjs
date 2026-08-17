import { arguments_assert } from "./arguments_assert.mjs";
import { permission_settings_local_dangling_remove_listed } from "./permission_settings_local_dangling_remove_listed.mjs";
import { property_get } from "./property_get.mjs";
export function permission_settings_local_dangling_remove_permissions(
  settings,
) {
  arguments_assert(arguments, 1);
  let r4 = permission_settings_local_dangling_remove_listed(settings);
  let listed = property_get(r4, "listed");
  let permissions = property_get(r4, "permissions");
  let r = {
    listed,
    permissions,
  };
  return r;
}
