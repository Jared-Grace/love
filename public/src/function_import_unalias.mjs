import { function_import } from "../../../love/public/src/function_import.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
export async function function_import_unalias(f_name) {
  marker("1");
  let { unaliased } = await function_name_unalias(f_name);
  const imported_fn = await function_import(unaliased);
  return imported_fn;
}
