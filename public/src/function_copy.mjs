import { property_get } from "../../../love/public/src/property_get.mjs";
import { user_repo_path_combine } from "../../../love/public/src/user_repo_path_combine.mjs";
import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
export async function function_copy(f_name_old, f_name_new) {
  const r = await function_name_to_path_unalias(f_name_old);
  let unaliased_old = property_get(r, "unaliased");
  let f_path_old = property_get(r, "f_path");
  let r2 = await function_name_unalias(f_name_new);
  let unaliased_new = property_get(r2, "unaliased");
  let f_path = function_name_to_path(f_name_new);
  let f_path_new = await user_repo_path_combine(f_path);
  await file_copy(f_path_old, f_path_new);
  function lambda(ast) {
    js_identifier_rename(ast, unaliased_old, unaliased_new);
  }
  await function_transform(unaliased_new, lambda);
  await file_open(f_path_new);
  await function_current_set(unaliased_new);
  return unaliased_new;
}
