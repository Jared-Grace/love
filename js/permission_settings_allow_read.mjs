import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_settings_allow_read(path) {
  arguments_assert(arguments, 1);
  ("the allow rules written in one settings file, read off disk");
  ("a rule lives two keys down, under permissions and then allow, and every reader of a settings file walked that same pair of steps.");
  let settings = await file_read_json(path);
  let permissions = property_get(settings, "permissions");
  let allow = property_get(permissions, "allow");
  return allow;
}
