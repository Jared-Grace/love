import { file_js_parse } from "./file_js_parse.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { visit } from "./visit.mjs";
export async function function_imports_missing_add(f_name) {
  const f_path = function_name_to_path(f_name);
  let parsed = await file_js_parse(f_path);
  let on_each=console.log
  visit(parsed, n=>{if(a){}}, on_each)
}
