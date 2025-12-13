import { function_rename_fn_names_check } from "../../../love/public/src/function_rename_fn_names_check.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { function_move } from "../../../love/public/src/function_move.mjs";
import { function_rename_identifiers } from "../../../love/public/src/function_rename_identifiers.mjs";
import { function_alias_rename } from "../../../love/public/src/function_alias_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename(f_name_before, f_name_after) {
  const { unaliased } = await function_name_to_path_unalias(f_name_before);
  f_name_before = unaliased;
  await function_rename_fn_names_check(f_name_before);
  await function_move(f_name_before, f_name_after);
  await function_rename_identifiers_alias(f_name_before, f_name_after);
  marker("1");
  return;
}
async function function_rename_identifiers_alias(f_name_before, f_name_after) {
  let v = await function_alias_rename(f_name_before, f_name_after);
  await function_rename_identifiers(f_name_before, f_name_after);
}

