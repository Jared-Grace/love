import { log } from "./log.mjs";
import { function_rename_check } from "./function_rename_check.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { file_copy } from "./file_copy.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
export async function function_copy(f_name_old, f_name_new) {
  log(function_copy.name, {
    f_name_old,
    f_name_new,
  });
  let r = await function_name_to_path_unalias(f_name_old);
  let unaliased_old = property_get(r, "unaliased");
  let f_path_old = property_get(r, "f_path");
  ("not sure if should be unaliasing the new name - why would an alias already exist for a function that does not exist yet?");
  await function_rename_check(f_name_new);
  let f_path = function_name_to_path(f_name_new);
  let f_path_new = await user_repo_path_combine(f_path);
  await file_copy(f_path_old, f_path_new);
  function lambda(ast) {
    js_identifier_rename(ast, unaliased_old, f_name_new);
  }
  await function_transform(f_name_new, lambda);
  let r3 = {
    f_path_new,
    name: f_name_new,
  };
  return r3;
}
