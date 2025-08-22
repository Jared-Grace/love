import { path_join } from "./path_join.mjs";
import { string_includes } from "./string_includes.mjs";
import { error } from "./error.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { functions_path } from "./functions_path.mjs";
export function function_name_to_path(f_name) {
  if (string_includes(f_name, ".")) {
    error();
  }
  let joined2 = functions_path();
  let v = function_name_to_base(f_name);
  let second = [joined2, v];
  let joined = path_join(second);
  return joined;
}
