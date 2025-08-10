import { string_includes } from "./string_includes.mjs";
import { error } from "./error.mjs";
import { function_name_to_base } from "./function_name_to_base.mjs";
import { functions_path } from "./functions_path.mjs";
import path from "path";
export function function_name_to_path(f_name) {
  if (0 && string_includes(f_name, ".")) {
    error();
  }
  let second = [functions_path(), function_name_to_base(f_name)];
  let joined = path.join(...second);
  return joined;
}
