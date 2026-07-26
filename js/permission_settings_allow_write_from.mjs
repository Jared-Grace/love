import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_first } from "./list_first.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_allow_generated_from } from "./permission_allow_generated_from.mjs";
import { property_set } from "./property_set.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function permission_settings_allow_write_from(names) {
  "write the shared settings file's allow list out from this exact list of granted function names, leaving every other key in the file exactly as it was";
  "only the allow list is replaced. The hooks and the default mode live in the same file and nothing here derives them, so reading the file and putting one key back is the difference between generating a list and overwriting a file somebody else also owns.";
  "the local settings file beside it is per-machine and outside version control, so it is never written";
  let paths = permission_settings_paths();
  let path = list_first(paths);
  let settings = await file_read_json(path);
  let permissions = property_get(settings, "permissions");
  let generated = permission_allow_generated_from(names);
  property_set(permissions, "allow", generated);
  await file_overwrite_json(path, settings);
  let report = {
    path,
    allow: generated.length,
  };
  return report;
}
