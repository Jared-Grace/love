import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current(f_name_transformer) {
  let imported_fn = await function_import_unalias(f_name_transformer);
  let r = await function_transform_current_fn(imported_fn);
  return r;
}
