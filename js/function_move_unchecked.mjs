import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_copy } from "./file_copy.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_move_unchecked(f_name_before, f_name_after) {
  "Moves one function's file to a new name and renames it inside, for a caller that has already asked whether the new name is free. The plain copy asks the identifier index every time, and the index folds itself again after any file changes - so in a batch of moves that question cost a full fold per name, to be told what the batch already checked before the first one.";
  "The old name is taken as already unaliased.";
  arguments_assert(arguments, 2);
  let r = await function_name_to_path_unalias(f_name_before);
  let f_path_old = property_get(r, "f_path");
  let f_path = function_name_to_path_relative(f_name_after);
  let f_path_new = await user_repo_path_combine(f_path);
  await file_copy(f_path_old, f_path_new);
  function lambda(ast) {
    js_identifier_rename(ast, f_name_before, f_name_after);
  }
  await function_transform(f_name_after, lambda);
  await function_delete(f_name_before);
  return f_path_new;
}
