import { arguments_assert } from "./arguments_assert.mjs";
import { permission_settings_local_dangling_remove_held } from "./permission_settings_local_dangling_remove_held.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_settings_local_dangling_remove_settings(path) {
  arguments_assert(arguments, 1);
  let r3 = await permission_settings_local_dangling_remove_held(path);
  let held = property_get(r3, "held");
  let settings = property_get(r3, "settings");
  let r = {
    held,
    settings,
  };
  return r;
}
