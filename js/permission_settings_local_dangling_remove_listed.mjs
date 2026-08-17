import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
export function permission_settings_local_dangling_remove_listed(settings) {
  arguments_assert(arguments, 1);
  let permissions = property_get(settings, "permissions");
  let listed = property_exists(permissions, "allow");
  let r = {
    permissions,
    listed,
  };
  return r;
}
