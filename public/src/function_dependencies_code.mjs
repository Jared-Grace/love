import { function_dependencies_code_multiple } from "./function_dependencies_code_multiple.mjs";
export async function function_dependencies_code(f_name) {
  let v = await function_dependencies_code_multiple([f_name]);
  return v;
}
