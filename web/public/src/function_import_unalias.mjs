import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
export async function function_import_unalias(f_name) {
  let v = await function_name_unalias(f_name);
  let unaliased = property_get(v, "unaliased");
  const imported_fn = await function_import(unaliased);
  return imported_fn;
}
