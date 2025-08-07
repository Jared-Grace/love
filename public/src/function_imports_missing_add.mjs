import { js_visit_type } from "./js_visit_type.mjs";
import { function_parse } from "./function_parse.mjs";

export async function function_imports_missing_add(f_name) {
  let parsed = await function_parse(f_name);
  js_visit_type(parsed, 'ImportDeclaration', (v) => {let {node}=v;console.log(node)});
}
