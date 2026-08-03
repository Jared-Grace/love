import { function_name_to_path_found } from "./function_name_to_path_found.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
export async function function_parse(f_name) {
  "The parsed source of a function, found by the function's own name rather than by a path, so an alias reaches it too.";
  let f_path = await function_name_to_path_found(f_name);
  let parsed = await file_js_parse(f_path);
  return parsed;
}
