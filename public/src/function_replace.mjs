import { function_rename_identifiers_alias } from "../../../love/public/src/function_rename_identifiers_alias.mjs";
import { function_rename_fn_names_check } from "../../../love/public/src/function_rename_fn_names_check.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_replace(f_name_before, f_name_after) {
  const { unaliased } = await function_name_to_path_unalias(f_name_before);
  f_name_before = unaliased;
  await function_rename_fn_names_check(f_name_before);
  await function_delete(f_name_before);
  await function_rename_identifiers_alias(f_name_before, f_name_after);
  marker("1");
}
