import { js_visit_types_function_named_list } from "../../../love/public/src/js_visit_types_function_named_list.mjs";
export function js_visit_types_function_named_single(ast, name) {
  let list = js_visit_types_function_named_list(ast, name);
  return list;
}
