import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
export function function_name_to_path_fn(fn) {
  let f_path = function_name_to_path_relative(fn.name);
  return f_path;
}
