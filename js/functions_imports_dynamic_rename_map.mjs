import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_code } from "./repo_functions_code.mjs";
import { function_entries_names_code_includes } from "./function_entries_names_code_includes.mjs";
import { property_initialize_list_add_if_not_includes } from "./property_initialize_list_add_if_not_includes.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports_dynamic_rename } from "./js_imports_dynamic_rename.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_imports_dynamic_rename_map(renames) {
  "Every function that fetches a renamed function's file while running is made to fetch the new file instead, for a whole map of renames. The repo's source is read once for all the names, and each fetching function is rewritten once for all the files it fetches. The names of the functions changed are handed back.";
  "It is asked after the functions have moved, so the source it reads already names every function by its new name, and the fetches it finds are the only thing left spelling an old one.";
  arguments_assert(arguments, 1);
  let befores = object_property_names(renames);
  let repo_name = repo_love_name();
  let entries = await repo_functions_code(repo_name);
  let groups = {};
  for (let before of befores) {
    let path_before = "./" + before + ".mjs";
    let names = function_entries_names_code_includes(entries, path_before);
    for (let f_name of names) {
      property_initialize_list_add_if_not_includes(groups, f_name, before);
    }
  }
  let changed = [];
  for (let f_name of object_property_names(groups)) {
    let names = property_get(groups, f_name);
    let replaced = 0;
    function lambda(ast) {
      for (let before of names) {
        let after = property_get(renames, before);
        let count = js_imports_dynamic_rename(ast, before, after);
        replaced = replaced + count;
      }
    }
    await function_transform_auto(f_name, lambda);
    if (greater_than(replaced, 0)) {
      list_add(changed, f_name);
    }
  }
  return changed;
}
