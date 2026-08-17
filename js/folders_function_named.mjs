import { arguments_assert } from "./arguments_assert.mjs";
import { folders_function_named_roots } from "./folders_function_named_roots.mjs";
import { list_add } from "./list_add.mjs";
import { path_join } from "./path_join.mjs";
export function folders_function_named(f_name) {
  "Every folder one function's name owns, whether or not any of them is there yet.";
  "Asked by the name rather than by the function, because a rename holds the old name and the new one at different moments and neither moment holds both functions.";
  "$plain f_name";
  "the name is a word a folder is called after. It addresses stored files and nothing that runs.";
  arguments_assert(arguments, 1);
  let roots = folders_function_named_roots();
  let folders = [];
  for (let root of roots) {
    let folder = path_join([root, f_name]);
    list_add(folders, folder);
  }
  return folders;
}
