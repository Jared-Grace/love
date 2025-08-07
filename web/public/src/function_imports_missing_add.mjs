import { file_js_parse } from "./file_js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { js_visit } from "./js_visit.mjs";

export async function function_imports_missing_add(f_name) {
  const f_path = function_name_to_path(f_name);
  let parsed = await file_js_parse(f_path);
  js_visit(parsed, v => {
console.log(v)
  });
}