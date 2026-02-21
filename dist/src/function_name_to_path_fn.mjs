import { function_name_to_path } from "../../../love/public/src/function_name_to_path.mjs";
export function function_name_to_path_fn(fn) {
  let f_path = function_name_to_path(fn.name);
  return f_path;
}
