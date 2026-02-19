import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { functions_identifiers_rename_alias } from "../../../love/public/src/functions_identifiers_rename_alias.mjs";
import { function_rename_fn_names_check } from "../../../love/public/src/function_rename_fn_names_check.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
export async function function_replace(f_name_before, f_name_after) {
  const unaliased = await function_name_unalias_only(f_name_before);
  f_name_before = unaliased;
  await function_rename_fn_names_check(f_name_before);
  await function_delete(f_name_before);
  await functions_identifiers_rename_alias(f_name_before, f_name_after);
}
