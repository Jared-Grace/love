import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
export async function function_parse_strict(f_name) {
  let { f_path } = await function_name_to_path_search(f_name);
  let parsed = await file_js_parse(f_path);
  return parsed;
}
