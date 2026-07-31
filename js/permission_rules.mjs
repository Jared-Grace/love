import { permission_settings_allow_read } from "./permission_settings_allow_read.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function permission_rules() {
  "every allow rule across both settings files, whatever tool it grants";
  let rules = [];
  for (let path of permission_settings_paths()) {
    let allow = await permission_settings_allow_read(path);
    list_add_multiple(rules, allow);
  }
  let unique = list_unique(rules);
  return unique;
}
