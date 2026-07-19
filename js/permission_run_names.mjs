import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { permission_rule_run_name } from "./permission_rule_run_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export async function permission_run_names() {
  "every name a permission rule auto-approves for node scripts/r.mjs, across both settings files";
  let names = [];
  for (let path of permission_settings_paths()) {
    let settings = await file_read_json(path);
    let permissions = property_get(settings, "permissions");
    let allow = property_get(permissions, "allow");
    for (let rule of allow) {
      let name = permission_rule_run_name(rule);
      if (not(text_empty_is(name))) {
        list_add(names, name);
      }
    }
  }
  let unique = list_unique(names);
  return unique;
}
