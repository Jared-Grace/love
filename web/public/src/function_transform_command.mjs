import { function_import } from "./function_import.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_transform_command(f_name, transformer_name) {
  const transformer = await function_import(transformer_name);
  return await function_transform(f_name, transformer);
}
