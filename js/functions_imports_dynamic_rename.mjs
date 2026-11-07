import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { js_imports_dynamic_rename } from "./js_imports_dynamic_rename.mjs";
import { function_transform_auto } from "./function_transform_auto.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_imports_dynamic_rename(
  f_name_before,
  f_name_after,
) {
  "Every function in this repo that fetches a renamed function's file while running is made to fetch the new file instead. The names of the functions changed are handed back.";
  "The set is found, not given: a function is asked only when its source spells the old file's path, and is rewritten only where the path is a whole fetch source.";
  arguments_assert(arguments, 2);
  let path_before = "./" + f_name_before + ".mjs";
  let repo_name = repo_love_name();
  let names = await repo_functions_names_code_includes(repo_name, path_before);
  let changed = [];
  for (let f_name of names) {
    let replaced = 0;
    function lambda(ast) {
      replaced = js_imports_dynamic_rename(ast, f_name_before, f_name_after);
    }
    await function_transform_auto(f_name, lambda);
    if (greater_than(replaced, 0)) {
      list_add(changed, f_name);
    }
  }
  return changed;
}
