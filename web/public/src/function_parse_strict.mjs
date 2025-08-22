import {file_js_parse} from "./file_js_parse.mjs";
import {function_name_to_path} from "./function_name_to_path.mjs";
export async function function_parse_strict(f_name) {
  const f_path = function_name_to_path(f_name);
  let parsed = await file_js_parse(f_path);
  return parsed;
}
