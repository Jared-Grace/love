import { function_path_to_name } from "./function_path_to_name.mjs";
import { path_name } from "./path_name.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_auto_path(f_path) {
  let f_name = function_path_to_name(f_path);
  let v = await function_auto(f_name);
  return v;
}
