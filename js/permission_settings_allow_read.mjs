import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function permission_settings_allow_read(path) {
  arguments_assert(arguments, 1);
  ("the allow rules written in one settings file, read off disk");
  ("a rule lives two keys down, under permissions and then allow, and every reader of a settings file walked that same pair of steps.");
  let settings = await file_read_json(path);
  let allow = property_path_get_2(settings, "permissions", "allow");
  return allow;
}
