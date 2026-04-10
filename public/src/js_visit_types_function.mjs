import { js_types_function } from "../../../love/public/src/js_types_function.mjs";
import { js_visit_types } from "../../../love/public/src/js_visit_types.mjs";
export function js_visit_types_function(ast, types, lambda$v) {
  let types_function = js_types_function();
  let r = js_visit_types(ast, types, lambda$v);
  return r;
}
