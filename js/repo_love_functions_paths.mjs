import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_js } from "./folder_js.mjs";
import { path_join } from "./path_join.mjs";
import { functions_names_from_path } from "./functions_names_from_path.mjs";
import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
import { list_add } from "./list_add.mjs";
export async function repo_love_functions_paths() {
  arguments_assert(arguments, 0);
  ("the file of every function this repo holds, spelled from the root - the repo the code is itself written in, rather than one of the repos standing beside it.");
  ("The twin of the reading that answers with names, and it exists for the same reason: a gate is judged inside a frozen copy of the tree with no repos beside it, so a sweep that reaches for its neighbours to find its own files dies there rather than reporting.");
  ("The folder is worked out from where this code is standing, so the copy is the repo for anything asking, and nothing is joined onto a repo name a setting has to supply.");
  let folder = folder_repo_love();
  let js = folder_js();
  let f_folder = path_join([folder, js]);
  let f_names = await functions_names_from_path(f_folder);
  let f_paths = [];
  for (let f_name of f_names) {
    let f_path = function_name_folder_to_path(f_name, f_folder);
    list_add(f_paths, f_path);
  }
  return f_paths;
}
