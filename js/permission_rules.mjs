import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function permission_rules() {
  "every allow rule across both settings files, whatever tool it grants";
  let rules = [];
  for (let path of permission_settings_paths()) {
    let settings = await file_read_json(path);
    let permissions = property_get(settings, "permissions");
    let allow = property_get(permissions, "allow");
    list_add_multiple(rules, allow);
  }
  let unique = list_unique(rules);
  return unique;
}
