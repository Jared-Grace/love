import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { permission_hook_paths } from "./permission_hook_paths.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export async function permission_decider_paths() {
  "every file that decides what happens without asking - the settings files holding the rules, and the files holding the hooks that run before the rules are consulted";
  "the two are one question wearing two shapes. A rule and a hook both answer 'may this happen unasked', and a standing approval to change either one is a standing approval to decide that for itself. Naming only the settings files closed the smaller half: the hook covering the write tools can answer allow, which skips the permission engine entirely, so it reaches the settings file too.";
  "spelled from the root, so that a rule written one way and a file named another way can be compared at all.";
  let paths = [];
  for (let settings of permission_settings_paths()) {
    let path = await path_resolve(settings);
    list_add(paths, path);
  }
  let hooks = await permission_hook_paths();
  list_add_multiple(paths, hooks);
  let unique = list_unique(paths);
  return unique;
}
