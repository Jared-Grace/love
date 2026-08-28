import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_js } from "./folder_js.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
export async function repo_love_function_import(f_name) {
  arguments_assert(arguments, 1);
  ("a function of this repo, itself rather than its source, given its name.");
  ("The twin of ",
    fn_name("repo_love_function_read"),
    " and it exists for the same reason: the general importer searches the repos standing beside this one before it opens anything, and inside a frozen copy of the tree there are none, so the search is what fails rather than the code being asked about.");
  ("The path is built from where this file is sitting, which a frozen copy carries with it, and the function is taken from the file by its own name because that is the only name this repo exports anything under.");
  let folder = folder_repo_love();
  let js = folder_js();
  let file_name = text_combine(f_name, ".mjs");
  let f_path = path_join([folder, js, file_name]);
  let url = text_combine("file://", f_path);
  let imported = await import(url);
  let fn = property_get(imported, f_name);
  return fn;
}
