import { function_import_unalias } from "./function_import_unalias.mjs";
import { functions_transform } from "./functions_transform.mjs";
export async function functions_transform_prompt(transformer_name) {
  let transformer = await function_import_unalias(transformer_name);
  let r = await functions_transform(transformer);
  return r;
}
