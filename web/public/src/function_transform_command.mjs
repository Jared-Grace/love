import { function_transform_result } from "../../../love/public/src/function_transform_result.mjs";
import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
export async function function_transform_command(transformer_name, f_name) {
  const transformer = await function_import_unalias(transformer_name);
  let v = await function_transform_result(f_name, transformer);
  return v;
}
