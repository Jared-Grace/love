import { functions_identifiers_rename } from "../../../love/public/src/functions_identifiers_rename.mjs";
import { function_alias_rename } from "../../../love/public/src/function_alias_rename.mjs";
export async function functions_identifiers_rename_alias(
  f_name_before,
  f_name_after,
) {
  let v = await function_alias_rename(f_name_before, f_name_after);
  await functions_identifiers_rename(f_name_before, f_name_after);
}
