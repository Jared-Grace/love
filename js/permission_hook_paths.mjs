import { permission_settings_hook_commands } from "./permission_settings_hook_commands.mjs";
import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export async function permission_hook_paths() {
  "every file on disk that a registered hook runs, read out of both settings files";
  "a hook runs BEFORE the permission engine and its answer can be final - a deny nothing outranks, or an allow that skips the engine altogether - so the file holding one decides what happens without asking just as surely as the rules do. The live one covering the write tools abstains outside the memory folder and does not guard itself, so a standing approval to edit it is a standing approval to write anything at all.";
  "read out of the settings rather than listed off the hooks folder, because the folder also holds files nothing currently runs. A rule on one of those grants an edit to a file with no say in anything, which is a different and much smaller finding, and folding the two together would make this one look larger than it is.";
  "the commands themselves are asked for elsewhere, because a gate asking whether one particular hook is started needs exactly the same list and the two readings must not be able to disagree about what counts as a declared hook. This half is only about turning those commands into files.";
  "a word is kept when it names a file that is actually there. An extension list would be a second thing to keep in step with reality, and a hook script that does not exist cannot run either way.";
  let rows = await permission_settings_hook_commands();
  let named = property_get_curried_right("command");
  let commands = list_map(rows, named);
  let separator = "/";
  let paths = [];
  for (let command of commands) {
    for (let word of text_split_space(command)) {
      let looks_like_path = text_includes(word, separator);
      if (not(looks_like_path)) {
        continue;
      }
      let path = await path_resolve(word);
      let there = await file_exists(path);
      if (not(there)) {
        continue;
      }
      list_add(paths, path);
    }
  }
  let unique = list_unique(paths);
  return unique;
}
