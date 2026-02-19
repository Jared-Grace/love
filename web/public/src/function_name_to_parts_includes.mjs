import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
export function function_name_to_parts_includes(f_name, part) {
  let parts = function_name_to_parts(f_name);
  let includes = list_includes(parts, part);
  return includes;
}
