import { function_current_set } from "./function_current_set.mjs";
import { js_identifier_replace } from "./js_identifier_replace.mjs";
import { function_transform } from "./function_transform.mjs";
import { file_copy } from "./file_copy.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_open } from "./file_open.mjs";
export async function function_copy(f_name_old, f_name_new) {
  const { f_path: f_path_old, unaliased: unaliased_old } =
    await function_name_to_path_unalias(f_name_old);
  const { f_path: f_path_new, unaliased: unaliased_new } =
    await function_name_to_path_unalias(f_name_new);
  await file_copy(f_path_old, f_path_new);
  function lambda(ast) {
    js_identifier_replace(ast, unaliased_old, unaliased_new);
  }
  await function_transform(unaliased_new, lambda);
  await file_open(f_path_new);
  await function_current_set(unaliased_new);
}
