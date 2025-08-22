import { function_transform_result } from "./function_transform_result.mjs";
import { function_import } from "./function_import.mjs";
export async function function_transform_command(transformer_name, f_name) {
  const transformer = await function_import(transformer_name);
  let v = await function_transform_result(f_name, transformer);
  return v;
}
