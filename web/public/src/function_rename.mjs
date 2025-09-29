import { function_rename_identifiers } from "../../../love/public/src/function_rename_identifiers.mjs";
import { function_alias_rename } from "../../../love/public/src/function_alias_rename.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { function_copy } from "../../../love/public/src/function_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename(f_name_before, f_name_after) {
  await function_copy(f_name_before, f_name_after);
  await function_delete(f_name_before);
  let v = await function_alias_rename(f_name_before, f_name_after);
  await function_rename_identifiers(f_name_before, f_name_after);
  marker("1");
}
