import { permission_settings_allow_read } from "./permission_settings_allow_read.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export async function permission_run_names() {
  "every name a permission rule auto-approves for node scripts/r.mjs, across both settings files";
  let names = [];
  for (let path of permission_settings_paths()) {
    let allow = await permission_settings_allow_read(path);
    for (let rule of allow) {
      let name = dispatcher_run_name(rule);
      let b = text_empty_is(name);
      if (not(b)) {
        list_add(names, name);
      }
    }
  }
  let unique = list_unique(names);
  return unique;
}
