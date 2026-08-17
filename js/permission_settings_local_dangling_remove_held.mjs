import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_exists } from "./property_exists.mjs";
export async function permission_settings_local_dangling_remove_held(path) {
  arguments_assert(arguments, 1);
  let settings = await file_read_json(path);
  let held = property_exists(settings, "permissions");
  let r = {
    settings,
    held,
  };
  return r;
}
