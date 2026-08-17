import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { permission_settings_local_dangling_remove_dangling_is } from "./permission_settings_local_dangling_remove_dangling_is.mjs";
import { list_add } from "./list_add.mjs";
export async function permission_settings_local_dangling_remove_r(
  path,
  settings,
  f_names,
  aliases,
  removed,
) {
  arguments_assert(arguments, 5);
  await file_overwrite_json(path, settings);
  ("Asked again off the file just written, so what comes back is what the gates will read rather than what this meant to leave. An empty remaining is the proof; anything else is a rule this could not account for and is worth reading");
  let after = await file_read_json(path);
  let after_allow = property_path_get_2(after, "permissions", "allow");
  let remaining = [];
  for (let rule of after_allow) {
    let dangling = permission_settings_local_dangling_remove_dangling_is(
      rule,
      f_names,
      aliases,
    );
    if (dangling) {
      list_add(remaining, rule);
    }
  }
  let r = {
    path,
    removed,
    remaining,
  };
  return r;
}
