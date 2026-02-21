import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function functions_transform_command(transformer_name) {
  const transformer = await function_import_unalias(transformer_name);
  let r = await functions_transform(transformer);
  return r;
}
