import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_rename_identifiers_alias } from "../../../love/public/src/function_rename_identifiers_alias.mjs";
import { function_rename_fn_names_check } from "../../../love/public/src/function_rename_fn_names_check.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_replace(f_name_before, f_name_after) {
  const v = await function_name_to_path_unalias(f_name_before);
  let unaliased = property_get(v, "unaliased");
  f_name_before = unaliased;
  await function_rename_fn_names_check(f_name_before);
  await function_delete(f_name_before);
  await function_rename_identifiers_alias(f_name_before, f_name_after);
}
