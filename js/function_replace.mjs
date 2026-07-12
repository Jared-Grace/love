import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { functions_identifiers_rename_alias } from "./functions_identifiers_rename_alias.mjs";
import { function_rename_fn_names_check } from "./function_rename_fn_names_check.mjs";
import { function_delete } from "./function_delete.mjs";
export async function function_replace(f_name_before, f_name_after) {
  let unaliased = await function_name_unalias_only(f_name_before);
  f_name_before = unaliased;
  await function_rename_fn_names_check(f_name_before, f_name_after);
  await function_delete(f_name_before);
  await functions_identifiers_rename_alias(f_name_before, f_name_after);
}
