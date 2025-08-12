import { function_path_to_name } from "./function_path_to_name.mjs";
import { path_name } from "./path_name.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_auto_path(f_name) {
  let f_name= function_path_to_name(f_name);
  return await function_auto(f_name);
}
