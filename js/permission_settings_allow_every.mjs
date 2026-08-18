import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { permission_settings_allow_read } from "./permission_settings_allow_read.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_is } from "./list_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function permission_settings_allow_every() {
  "Every allow rule in force, gathered from all the files a rule can live in.";
  "One file is shared by every machine and the other is this machine's own, and a rule in either one permits. Asking only the shared one would call a granted thing ungranted, which reads as friction still being paid for something that was settled a week ago.";
  "A file that is not there yet contributes nothing rather than stopping the reading, since the per-machine one is outside version control and a fresh checkout simply has none.";
  let paths = permission_settings_paths();
  let rules = [];
  for (let path of paths) {
    async function read_take() {
      let allow = await permission_settings_allow_read(path);
      return allow;
    }
    let allow = await catch_null_async(read_take);
    let there = list_is(allow);
    if (there) {
      list_add_multiple(rules, allow);
    }
  }
  return rules;
}
